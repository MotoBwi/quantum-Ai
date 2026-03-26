# Security Policy

Quantum AI takes security seriously.  
We design Quantum AI as a production-grade Voice AI orchestration platform, often deployed in private cloud or customer-controlled environments. Responsible disclosure helps us keep the platform safe for everyone.

---

## Supported Versions

Security updates are applied to the latest released versions of Quantum AI.

| Version | Supported |
|--------|-----------|
| Latest release | ✅ |
| Older releases | ❌ |

If you are running an older version, we strongly recommend upgrading to the latest release.

---

## Reporting a Vulnerability

If you believe you have found a security vulnerability in Quantum AI, **please do not open a public GitHub issue**.

Instead, report it privately using one of the following methods:

- **Email:** `prashant@Quantum AI.ai`
- **Subject:** `Security Vulnerability Report`

Please include:
- A clear description of the issue
- Steps to reproduce (if applicable)
- Potential impact
- Affected components or services
- Any relevant logs, screenshots, or PoC details

We support responsible disclosure and appreciate detailed reports.

---

## Response Process

Once a vulnerability is reported:

1. We will acknowledge receipt within **48 hours**
2. We will investigate and assess severity
3. We will work on a fix or mitigation
4. We will coordinate disclosure timing if required
5. A security fix will be released and documented when appropriate

We aim to resolve critical issues as quickly as possible.

---

## Security Scope

This policy covers:
- Quantum AI core orchestration services
- APIs, SDKs, and control plane
- Voice streaming, agent execution, and orchestration logic
- Deployment artifacts (Docker, Helm, etc.)

Out of scope:
- Misconfigurations in self-hosted deployments
- Third-party providers (telephony, STT, LLM, TTS) unless caused by Quantum AI integration logic
- Social engineering or physical attacks

---

## Deployment Responsibility

Quantum AI is often deployed in:
- Private cloud
- Customer VPC
- On-prem or regulated environments

Security of infrastructure, networking, IAM, secrets management, and compliance controls remains the responsibility of the deploying organization. Quantum AI provides secure defaults, but final security posture depends on deployment configuration.

---

## Open Source Security

Quantum AI is open-source by design.  
We believe transparency improves security through review, auditing, and community collaboration.

If you are interested in contributing security improvements:
- Open a pull request (non-sensitive issues)
- Or report privately for vulnerabilities

---

## Contact

For security-related matters only:  
📧 **prashant@Quantum AI.ai**

For general support and questions:  
📧 **sales@Quantum AI.ai**

---

Thank you for helping keep Quantum AI and its users secure.
