/**
 * Maps SoftSkill names in EN or FR to their semantically cohesive Lucide icon.
 */
export function getSoftSkillIcon(skillName, defaultIcon = 'activity') {
  if (!skillName) return defaultIcon;
  const n = String(skillName).toLowerCase().trim();
  if (n.includes('communication')) return 'messages-square';
  if (n.includes('collaborative') || n.includes('team') || n.includes('collaborat') || n.includes('travail')) return 'users';
  if (n.includes('learning') || n.includes('apprentissage') || n.includes('problem') || n.includes('résolution')) return 'lightbulb';
  if (n.includes('discipline') || n.includes('quality') || n.includes('qualité') || n.includes('rigueur') || n.includes('responsib') || n.includes('responsabilit')) return 'shield-check';
  if (n.includes('time') || n.includes('milestone') || n.includes('temps') || n.includes('délai') || n.includes('gestion')) return 'activity';
  if (n.includes('adaptab') || n.includes('curiosit') || n.includes('curiosité')) return 'shuffle';
  if (n.includes('community') || n.includes('communauté')) return 'heart-handshake';
  return defaultIcon;
}
