import type { APIRoute } from "astro";

const getSecurityTxt = () => `# Security Policy for genshot
# https://securitytxt.org/

Contact: mailto:business.genshot@gmail.com
Contact: https://linktr.ee/connectverseweb3
Expires: 2999-12-31T23:59:59.000Z
Encryption: https://genshot.vercel.app/pgp-key.txt
Acknowledgments: https://genshot.vercel.app/security/acknowledgments
Policy: https://genshot.vercel.app/security/policy
Hiring: https://genshot.vercel.app/careers/security

# Preferred Languages
Preferred-Languages: en, es, fr

# Canonical URL
Canonical: https://genshot.vercel.app/.well-known/security.txt
`;

export const GET: APIRoute = () => {
  return new Response(getSecurityTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
