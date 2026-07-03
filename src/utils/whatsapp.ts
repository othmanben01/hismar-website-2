/**
 * Generates a WhatsApp API link with pre-filled message content
 * formatted for Hismar Menuiserie.
 */
export interface WhatsAppMessageData {
  prenom: string;
  nom: string;
  tel: string;
  construction: string;
  type: string;
  msg: string;
}

export function getWhatsAppLink(data: WhatsAppMessageData): string {
  const text = 
    `Bonjour Hismar,\n\n` +
    `Nom : ${data.prenom.trim()} ${data.nom.trim()}\n` +
    `Tél : ${data.tel.trim()}\n\n` +
    `Construction : ${data.construction}\n` +
    `Type : ${data.type}\n\n` +
    `Projet : ${data.msg.trim()}`;

  return `https://wa.me/212662177069?text=${encodeURIComponent(text)}`;
}
