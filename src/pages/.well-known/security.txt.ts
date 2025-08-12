import type { APIRoute } from "astro";

const getSecurityTxt = () => `# Security Policy for genshot
# https://securitytxt.org/

Contact: mailto:security@genshot.com
Contact: https://genshot.com/contact/
Expires: 2026-12-31T23:59:59.000Z
Encryption: https://genshot.com/pgp-key.txt
Acknowledgments: https://genshot.com/security/acknowledgments
Policy: https://genshot.com/security/policy
Hiring: https://genshot.com/careers/security

# Preferred Languages
Preferred-Languages: en, es, fr

# Canonical URL
Canonical: https://genshot.com/.well-known/security.txt
`;

export const GET: APIRoute = () => {
  return new Response(getSecurityTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
