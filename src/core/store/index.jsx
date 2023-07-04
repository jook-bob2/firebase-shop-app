import { ProviderCreate } from './ProviderCreate';
import { providers } from './providers';

export function Provider({ children }) {
  return <ProviderCreate contexts={providers}>{children}</ProviderCreate>;
}
