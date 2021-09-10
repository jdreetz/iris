import { SSR } from './SSR';
import { createElement } from './createElement';

export function createPortalOutlet(id: string) {
  if (SSR) return null;

  // if Portal already exists, return Portal element
  // if Portal does not exist, make and return a new Portal element
  return document.getElementById(id) ?? makePortal(id);
}

function makePortal(id: string) {
  if (SSR) return null;

  // create new Portal element with specified id
  const portal = createElement('div', { id });
  portal.style.top = '0';
  portal.style.left = '0';
  portal.style.position = 'absolute';
  // portal.style.width = '100%';
  // portal.style.height = '100%';

  document.body.appendChild(portal);
  return portal;
}
