import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 80;

const resend = new Resend(process.env.RESEND_API_KEY);

app.disable('x-powered-by');

app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

app.use(express.json());

function rateLimit({ windowMs, max, keyGenerator }) {
  const hits = new Map();
  return (req, res, next) => {
    const key = keyGenerator ? keyGenerator(req) : req.ip;
    const now = Date.now();
    const entry = hits.get(key);
    if (!entry || now > entry.reset) {
      hits.set(key, { count: 1, reset: now + windowMs });
      return next();
    }
    if (entry.count >= max) {
      return res.status(429).json({ success: false, message: 'Trop de requêtes. Réessayez plus tard.' });
    }
    entry.count += 1;
    next();
  };
}

const devisLimiter = rateLimit({ windowMs: 60 * 1000, max: 3 });

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Route pour les demandes de devis
app.post('/devis', devisLimiter, async (req, res) => {
  try {
    const {
      nom,
      prenom,
      telephone,
      email,
      adresse,
      codePostal,
      ville,
      prestations,
      hasPlans,
      hasDeclarationDT,
      informations
    } = req.body;

    if (!nom || !prenom || !telephone || !email || !adresse || !codePostal || !ville) {
      return res.status(400).json({
        success: false,
        message: 'Champs requis manquants'
      });
    }

    const ticketId = 'GR-' + Date.now();

    // Mapping des prestations
    const prestationsLabels = {
      detection: 'Détection de réseaux enterrés',
      georeferencement: 'Géoréférencement de réseaux',
      investigation: 'Investigation complémentaire',
      marquage: 'Marquage piquetage',
      topographie: 'Topographie'
    };

    const prestationsText = prestations && prestations.length > 0
      ? prestations.map(p => prestationsLabels[p] || p).join(', ')
      : 'Non spécifiées';

    // Email à l'équipe
    const toTeam = resend.emails.send({
      from: 'Géo-Réseaux <contact@geo-reseaux.net>',
      to: 'contact@geo-reseaux.net',
      subject: `Nouvelle demande de devis - ${escapeHtml(nom)} ${escapeHtml(prenom)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#225777">Nouvelle demande de devis</h2>
          <p><strong>Numéro de dossier :</strong> ${escapeHtml(ticketId)}</p>

          <h3 style="color:#225777; border-bottom: 2px solid #225777; padding-bottom: 5px;">Coordonnées</h3>
          <p><strong>Nom :</strong> ${escapeHtml(nom)} ${escapeHtml(prenom)}</p>
          <p><strong>Téléphone :</strong> ${escapeHtml(telephone)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>

          <h3 style="color:#225777; border-bottom: 2px solid #225777; padding-bottom: 5px;">Lieu d'intervention</h3>
          <p><strong>Adresse :</strong> ${escapeHtml(adresse)}</p>
          <p><strong>Code postal :</strong> ${escapeHtml(codePostal)}</p>
          <p><strong>Ville :</strong> ${escapeHtml(ville)}</p>

          <h3 style="color:#225777; border-bottom: 2px solid #225777; padding-bottom: 5px;">Prestations souhaitées</h3>
          <p>${escapeHtml(prestationsText)}</p>

          <h3 style="color:#225777; border-bottom: 2px solid #225777; padding-bottom: 5px;">Documents et déclarations</h3>
          <p><strong>Plans de réseaux :</strong> ${hasPlans ? 'Oui (fichiers à récupérer)' : 'Non'}</p>
          <p><strong>Déclaration DT effectuée :</strong> ${hasDeclarationDT ? 'Oui' : 'Non'}</p>

          <h3 style="color:#225777; border-bottom: 2px solid #225777; padding-bottom: 5px;">Informations complémentaires</h3>
          <div style="white-space:pre-wrap;line-height:1.6;color:#333;background:#f5f5f5;padding:12px;border-radius:6px;">${informations ? escapeHtml(informations) : 'Aucune'}</div>
        </div>
      `
    });

    // Email de confirmation au client
    const toUser = resend.emails.send({
      from: 'Géo-Réseaux <contact@geo-reseaux.net>',
      to: email,
      subject: 'Votre demande de devis a bien été reçue',
      html: `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Demande de devis — Géo-Réseaux</title>
  <style>
    body { margin:0; padding:20px; background:#f4f6f8; font-family: "Helvetica Neue", Arial, sans-serif; color:#111827; }
    .container { max-width:600px; margin:16px auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 6px 18px rgba(17,24,39,0.06); }
    .header { background: linear-gradient(135deg, #225777 0%, #1a4560 100%); padding: 24px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
    .inner { padding:24px; }
    .logo { width:60px; height:60px; border-radius:8px; margin-bottom: 12px; }
    h2 { margin:4px 0 16px 0; font-size:20px; color: #225777; }
    p { margin:10px 0; line-height:1.6; color:#374151; }
    .highlight { background:#e8f4fc; border-left:4px solid #225777; padding:16px; border-radius:6px; color:#0f172a; margin: 16px 0; }
    .info-box { background:#f8fafc; padding:16px; border-radius:8px; margin: 16px 0; }
    .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
    .info-row:last-child { border-bottom: none; }
    .info-label { font-weight: 600; color: #374151; }
    .info-value { color: #6b7280; }
    .meta { background:#f3f4f6; padding:12px 16px; border-radius:6px; margin-top:16px; }
    .meta span { font-size:14px; color:#6b7280; }
    .footer { font-size:13px; color:#6b7280; margin-top:24px; padding-top: 16px; border-top: 1px solid #e5e7eb; }
    a.button { display:inline-block; margin-top:16px; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:600; background:#225777; color:#fff; }
    a.button:hover { background:#1a4560; }
    @media (max-width:480px){ .inner{ padding:16px } h2{ font-size:18px } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img class="logo" src="https://geo-reseaux.net/logo.webp" alt="Logo Géo-Réseaux" />
      <h1>Demande de devis reçue</h1>
    </div>
    <div class="inner">
      <h2>Bonjour ${escapeHtml(prenom)},</h2>

      <div class="highlight">
        <p style="margin:0;"><strong>Bonne nouvelle !</strong> Nous avons bien reçu votre demande de devis.</p>
        <p style="margin:8px 0 0 0;">Notre équipe l'étudiera et vous contactera sous <strong>24 à 48h ouvrées</strong>.</p>
      </div>

      <div class="meta">
        <span>Numéro de dossier : <strong>${escapeHtml(ticketId)}</strong></span>
      </div>

      <h3 style="color:#225777; margin-top:24px;">Récapitulatif de votre demande</h3>

      <div class="info-box">
        <div class="info-row">
          <span class="info-label">Lieu d'intervention</span>
          <span class="info-value">${escapeHtml(adresse)}, ${escapeHtml(codePostal)} ${escapeHtml(ville)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Prestations</span>
          <span class="info-value">${escapeHtml(prestationsText)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Plans fournis</span>
          <span class="info-value">${hasPlans ? 'Oui' : 'Non'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Déclaration DT</span>
          <span class="info-value">${hasDeclarationDT ? 'Effectuée' : 'Non effectuée'}</span>
        </div>
      </div>

      ${informations ? `
      <h3 style="color:#225777;">Vos informations complémentaires</h3>
      <div style="background:#f8fafc; padding:12px; border-radius:6px; white-space:pre-wrap; color:#374151;">
${escapeHtml(informations)}
      </div>
      ` : ''}

      <p style="margin-top:24px;">Si vous souhaitez ajouter des informations ou des documents, répondez simplement à cet email.</p>

      <a class="button" href="mailto:contact@geo-reseaux.net">Nous contacter</a>

      <div class="footer">
        <p>À très vite,<br/><strong>L'équipe Géo-Réseaux</strong></p>
        <p style="font-size:12px; color:#9ca3af;">
          Géo-Réseaux — Détection et géoréférencement de réseaux enterrés<br/>
          3 Rue des pins, 31790 Saint-Jory<br/>
          Tél : +33 7 69 80 54 38
        </p>
      </div>
    </div>
  </div>
</body>
</html>`
    });

    const results = await Promise.all([toTeam, toUser]);
    const error = results.find(r => r && r.error);
    if (error) {
      return res.status(500).json({ success: false, message: error.error?.message || 'Erreur envoi email' });
    }

    return res.status(200).json({ success: true, message: 'Demande de devis envoyée', ticketId });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de la demande', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
