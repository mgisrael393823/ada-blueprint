/**
 * Prefixes a path with the base path when in production
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Make sure path starts with / and doesn't duplicate if basePath ends with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}