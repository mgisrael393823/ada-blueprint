/**
 * Prefixes a path with the base path when in production
 */
export function getAssetPath(path: string): string {
  // Simplified version that just returns the path
  // No basePath needed since we're serving from root
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}