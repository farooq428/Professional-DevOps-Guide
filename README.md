# Professional DevOps CI/CD Practice

A complete hands-on DevOps practice project demonstrating a production-style deployment workflow for a modern web application.

This repository covers the complete journey from source code to production:

```text
Developer
    ↓
GitHub
    ↓
GitHub Actions
    ↓
CI Pipeline
    ↓
Docker Build
    ↓
Security Scan
    ↓
Container Registry
    ↓
Cloud VPS
    ↓
Docker Compose
    ↓
Nginx
    ↓
HTTPS / SSL
    ↓
Custom Domain
    ↓
Production Application
    ↓
Monitoring & Logging
```

---

# 📌 Table of Contents

* [1. Project Overview](#1-project-overview)
* [2. Goals](#2-goals)
* [3. Production Architecture](#3-production-architecture)
* [4. Technologies](#4-technologies)
* [5. DevOps Workflow](#5-devops-workflow)
* [6. Phase 1 — Git and GitHub](#6-phase-1--git-and-github)
* [7. Phase 2 — GitHub Actions CI](#7-phase-2--github-actions-ci)
* [8. Phase 3 — Docker](#8-phase-3--docker)
* [9. Phase 4 — Docker Security](#9-phase-4--docker-security)
* [10. Phase 5 — Container Registry](#10-phase-5--container-registry)
* [11. Phase 6 — Cloud VPS](#11-phase-6--cloud-vps)
* [12. Phase 7 — Docker Compose](#12-phase-7--docker-compose)
* [13. Phase 8 — Nginx](#13-phase-8--nginx)
* [14. Phase 9 — Domain](#14-phase-9--domain)
* [15. Phase 10 — HTTPS / SSL](#15-phase-10--https--ssl)
* [16. Phase 11 — Continuous Deployment](#16-phase-11--continuous-deployment)
* [17. Phase 12 — Health Checks](#17-phase-12--health-checks)
* [18. Phase 13 — Logging](#18-phase-13--logging)
* [19. Phase 14 — Monitoring](#19-phase-14--monitoring)
* [20. Phase 15 — Rollback](#20-phase-15--rollback)
* [21. Phase 16 — Production Security](#21-phase-16--production-security)
* [22. Secrets Management](#22-secrets-management)
* [23. Recommended Repository Structure](#23-recommended-repository-structure)
* [24. Complete CI/CD Flow](#24-complete-cicd-flow)
* [25. Production Checklist](#25-production-checklist)
* [26. DevOps Skills Demonstrated](#26-devops-skills-demonstrated)
* [27. Future Improvements](#27-future-improvements)

---

# 1. Project Overview

This project is a practical implementation of a professional CI/CD pipeline.

The goal is to understand how modern applications are:

* developed
* version controlled
* tested
* built
* containerized
* security scanned
* published
* deployed
* served through a reverse proxy
* secured with HTTPS
* monitored
* rolled back when necessary

The application can be any modern web application such as:

* Next.js
* React
* Node.js
* Express
* Python
* Django
* FastAPI

For this practice, the deployment architecture uses:

```text
GitHub
GitHub Actions
Docker
Container Registry
Cloud VPS
Docker Compose
Nginx
HTTPS
Custom Domain
Monitoring
```

---

# 2. Goals

The main goals of this project are:

### Development

* Use Git and GitHub professionally.
* Follow a clean branching strategy.
* Use Pull Requests.
* Keep production code version controlled.

### Continuous Integration

* Automatically install dependencies.
* Run linting.
* Run tests.
* Run TypeScript checks where applicable.
* Build the application.
* Scan dependencies and container images.

### Containerization

* Create a production Docker image.
* Use multi-stage Docker builds.
* Keep images small.
* Run containers as non-root users.
* Add health checks.

### Continuous Deployment

* Automatically publish Docker images.
* Deploy the new image to a VPS.
* Restart the application safely.
* Verify application health.

### Production

* Use Nginx as a reverse proxy.
* Configure a custom domain.
* Enable HTTPS.
* Configure automatic container restart.
* Implement logging.
* Implement monitoring.
* Support rollback.

---

# 3. Production Architecture

## High-Level Architecture

```text
                         ┌───────────────────┐
                         │     Developer     │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      GitHub       │
                         │   Source Code     │
                         └─────────┬─────────┘
                                   │
                              Push / PR
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  GitHub Actions   │
                         │                   │
                         │  Lint             │
                         │  Test             │
                         │  Type Check      │
                         │  Build            │
                         │  Security Scan    │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ Docker Build      │
                         └─────────┬─────────┘
                                   │
                                   ▼
                  ┌──────────────────────────────┐
                  │ Container Registry            │
                  │ Docker Hub / GitHub GHCR      │
                  └──────────────┬───────────────┘
                                 │
                              Pull Image
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │       Cloud VPS        │
                    │                        │
                    │  ┌──────────────────┐  │
Internet ─────────► │  │      Nginx       │  │
                    │  │ Reverse Proxy    │  │
                    │  └────────┬─────────┘  │
                    │           │            │
                    │           ▼            │
                    │  ┌──────────────────┐  │
                    │  │ Docker Compose    │  │
                    │  │                  │  │
                    │  │ Next.js          │  │
                    │  │ Container        │  │
                    │  └──────────────────┘  │
                    │                        │
                    │ Monitoring             │
                    │ Logging                │
                    └────────────────────────┘
                                 │
                                 ▼
                         HTTPS / SSL
                                 │
                                 ▼
                         Custom Domain
```

---

# 4. Technologies

## Source Control

```text
Git
GitHub
GitHub Actions
```

## Application

```text
Next.js
TypeScript
Node.js
```

## Containerization

```text
Docker
Docker Compose
```

## Container Registry

Either:

```text
Docker Hub
```

or:

```text
GitHub Container Registry (GHCR)
```

## Server

```text
Linux VPS
Ubuntu
SSH
```

## Reverse Proxy

```text
Nginx
```

## Security

```text
HTTPS
Let's Encrypt
SSH Keys
Firewall
Docker Image Scanning
Dependency Scanning
```

## Monitoring

Optional advanced tools:

```text
Uptime Kuma
Prometheus
Grafana
Loki
```

---

# 5. DevOps Workflow

The complete workflow is:

```text
1. Developer writes code
          ↓
2. Push code to GitHub
          ↓
3. GitHub Actions starts
          ↓
4. Install dependencies
          ↓
5. Run lint
          ↓
6. Run tests
          ↓
7. Type checking
          ↓
8. Build application
          ↓
9. Build Docker image
          ↓
10. Scan Docker image
          ↓
11. Push image to registry
          ↓
12. Connect to VPS
          ↓
13. Pull new image
          ↓
14. Start new container
          ↓
15. Health check
          ↓
16. Nginx sends traffic
          ↓
17. HTTPS
          ↓
18. Production
```

This represents both:

```text
CI = Continuous Integration

CD = Continuous Deployment
```

---

# Now We Will Start Working on all Practical Phases Step By Step

#### We Will Use a Next.js Project an Example

## 6. Phase 1 — Git and GitHub

> Clone the existing GitHub repository directly into your parent folder.

### Prerequisites
> - Git installed and configured.
> - GitHub account connected to Git.
> - `.gitignore` file configured.


**### 6.1 Clone Repository**

Navigate to the parent folder:

```bash
cd D:\WebProjects
```

Clone the repository:

```bash
git clone https://github.com/faroq428/devops-professional-gude.git
```

**---

### 6.2 Open Project**

```bash
cd devops-professional-gude
code .
```

**---

### 6.3 Verify Git Setup**

Check repository status:

```bash
git status
```

Check remote connection:

```bash
git remote -v
```

**---

### 6.4 Push Changes to GitHub**

```bash
git add .
git commit -m "Update project files"
git push
```

**---

### 6.5 Pull Latest Changes**

```bash
git pull
```

**---**

# 7. Phase 2 — GitHub Actions CI

The first objective is to automatically verify the application.

Create:

```text
.github/
└── workflows/
    └── ci.yml
```

Example: For Simple Next.js Application 

```yaml

name: Next.js CI

on:
  push:
    branches:
      - main
      - develop

  pull_request:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  
# add later if needed
# concurrency:
#   group: ci-${{ github.workflow }}-${{ github.ref }}
#   cancel-in-progress: true

jobs:
  ci:
    name: Lint, Type Check and Build
    runs-on: ubuntu-latest

    steps:
      # 1. Download repository code
      - name: Checkout repository
        uses: actions/checkout@v4

      # 2. Set up Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      # 3. Install dependencies
      - name: Install dependencies
        run: npm ci

      # 4. Check code quality
      - name: Run ESLint
        run: npm run lint

      # 5. Check TypeScript types
      - name: TypeScript type check
        run: npx tsc --noEmit

      # 6. Build the production application
      - name: Build Next.js application
        run: npm run build

```

---

# 8. CI Pipeline

The CI pipeline should verify:

```text
Code
 ↓
Dependencies
 ↓
Lint
 ↓
Type Check
 ↓
Tests
 ↓
Build
```

If one step fails:

```text
❌ Pipeline Failed
```

Deployment should not continue.

If everything succeeds:

```text
✅ Pipeline Passed
```

---

# 9. Phase 3 — Docker

The application should be containerized before deployment.

Create:

```text
Dockerfile
```

For a Next.js production application, use a multi-stage build.

Example:

```dockerfile
FROM node:22-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci


FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

This requires the Next.js application to use standalone output.

In `next.config.ts`:

```typescript
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
```

---

# 10. Why Multi-Stage Docker Builds?

Instead of putting everything inside the final image:

```text
Source Code
Dependencies
Build Tools
Development Packages
Application
```

we separate the stages:

```text
Dependencies
      ↓
Builder
      ↓
Production Runner
```

The final image contains only what is required to run the application.

Benefits:

* smaller image
* faster deployment
* lower attack surface
* cleaner production environment

---

# 11. .dockerignore

Create:

```text
.dockerignore
```

Example:

```text
node_modules
.next
.git
.github
.env
.env.local
npm-debug.log
README.md
Dockerfile
docker-compose.yml
```

Never copy unnecessary files into the Docker image.

---

# 12. Build Docker Image Locally

Build:

```bash
docker build -t my-app:latest .
```

Check images:

```bash
docker images
```

Run:

```bash
docker run -p 3000:3000 my-app:latest
```

Open:

```text
http://localhost:3000
```

Stop container:

```bash
docker ps
docker stop CONTAINER_ID
```

---

# 13. Phase 4 — Docker Security

Production containers should follow security best practices.

## Do not run as root

Use:

```dockerfile
USER nextjs
```

instead of running the application as root.

---

## Use small base images

Prefer:

```text
node:22-alpine
```

when compatible with your application.

---

## Do not store secrets inside Dockerfile

Never:

```dockerfile
ENV API_KEY="my-secret-key"
```

Instead use environment variables during deployment.

---

# 14. Docker Image Security Scan

A professional pipeline should scan images.

Example using Trivy:

```yaml
- name: Scan Docker image
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: my-app:${{ github.sha }}
    severity: CRITICAL,HIGH
    exit-code: 1
```

If serious vulnerabilities are found:

```text
❌ Security Scan Failed
```

---

# 15. Phase 5 — Container Registry

A registry stores Docker images.

You can use:

```text
Docker Hub
```

or:

```text
GitHub Container Registry
```

Recommended GitHub-based architecture:

```text
GitHub Repository
       │
       ├── GitHub Actions
       │
       └── GHCR
```

---

# 16. Docker Image Tagging

Avoid relying only on:

```text
latest
```

Use unique tags.

Example:

```text
my-app:1.0.0
```

or:

```text
my-app:abc1234
```

where `abc1234` is a Git commit SHA.

A good strategy is:

```text
my-app:latest
my-app:<commit-sha>
```

The SHA gives you an exact version.

---

# 17. Login to Docker Hub

```bash
docker login
```

Build:

```bash
docker build -t USERNAME/my-app:1.0.0 .
```

Push:

```bash
docker push USERNAME/my-app:1.0.0
```

---

# 18. GitHub Actions — Docker Build and Push

Example:

```yaml
- name: Login to Docker Hub
  uses: docker/login-action@v3
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}

- name: Build and push Docker image
  uses: docker/build-push-action@v6
  with:
    context: .
    push: true
    tags: |
      USERNAME/my-app:latest
      USERNAME/my-app:${{ github.sha }}
```

---

# 19. Phase 6 — Cloud VPS

Now create a Linux VPS.

Popular providers include:

```text
DigitalOcean
Hetzner
AWS
Azure
Google Cloud
Vultr
Linode
```

For learning, a small Ubuntu VPS is enough.

Recommended operating system:

```text
Ubuntu LTS
```

---

# 20. Connect to VPS

Using SSH:

```bash
ssh username@SERVER_IP
```

Example:

```bash
ssh root@123.123.123.123
```

For production, create a normal deployment user instead of using root for regular operations.

---

# 21. Update Server

```bash
sudo apt update
sudo apt upgrade -y
```

Install required packages:

```bash
sudo apt install -y curl git nginx
```

---

# 22. Install Docker

Install Docker using the official Docker installation method for your Ubuntu version.

Verify:

```bash
docker --version
```

Check:

```bash
docker compose version
```

---

# 23. Configure Firewall

Use UFW.

Check:

```bash
sudo ufw status
```

Allow SSH:

```bash
sudo ufw allow OpenSSH
```

Allow HTTP:

```bash
sudo ufw allow 80/tcp
```

Allow HTTPS:

```bash
sudo ufw allow 443/tcp
```

Enable:

```bash
sudo ufw enable
```

Important:

Do not expose application port `3000` publicly if Nginx is going to be the public entry point.

---

# 24. Phase 7 — Docker Compose

Docker Compose manages the production container.

Example:

```yaml
services:

  app:
    image: USERNAME/my-app:latest

    container_name: my-app

    restart: unless-stopped

    environment:
      NODE_ENV: production

    expose:
      - "3000"

    healthcheck:
      test:
        [
          "CMD",
          "wget",
          "--no-verbose",
          "--tries=1",
          "--spider",
          "http://localhost:3000"
        ]

      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

---

# 25. Why Docker Compose?

Instead of manually running:

```bash
docker run ...
```

you define the infrastructure in:

```text
docker-compose.yml
```

Then:

```bash
docker compose up -d
```

Stop:

```bash
docker compose down
```

View containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs
```

---

# 26. Environment Variables

Never commit production secrets.

Example:

```text
.env
```

```env
NODE_ENV=production
API_KEY=your-secret
DATABASE_URL=your-database-url
```

Add to `.gitignore`:

```text
.env
.env.*
!.env.example
```

Provide:

```text
.env.example
```

instead:

```env
NODE_ENV=production
API_KEY=
DATABASE_URL=
```

---

# 27. Phase 8 — Nginx

Nginx will act as a reverse proxy.

Without Nginx:

```text
Internet
   ↓
SERVER:3000
   ↓
Next.js
```

With Nginx:

```text
Internet
   ↓
HTTPS :443
   ↓
Nginx
   ↓
Next.js Container :3000
```

The application port does not need to be publicly exposed.

---

# 28. Nginx Configuration

Create a configuration:

```bash
sudo nano /etc/nginx/sites-available/my-app
```

Example:

```nginx
server {
    listen 80;

    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable:

```bash
sudo ln -s /etc/nginx/sites-available/my-app \
/etc/nginx/sites-enabled/my-app
```

Test:

```bash
sudo nginx -t
```

Restart:

```bash
sudo systemctl reload nginx
```

---

# 29. Phase 9 — Custom Domain

Buy or use a domain.

Example:

```text
myapp.com
```

Configure DNS.

Create an `A` record:

```text
Type: A
Name: @
Value: SERVER_IP
```

For `www`:

```text
Type: A
Name: www
Value: SERVER_IP
```

DNS flow:

```text
myapp.com
    ↓
DNS
    ↓
VPS IP
    ↓
Nginx
    ↓
Docker Container
```

---

# 30. Phase 10 — HTTPS / SSL

Use Let's Encrypt.

Install Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Run:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

Certbot configures HTTPS.

Your traffic becomes:

```text
Browser
   ↓
HTTPS
   ↓
Nginx
   ↓
Docker
   ↓
Application
```

---

# 31. Verify HTTPS

Open:

```text
https://example.com
```

Check:

* SSL certificate
* HTTPS connection
* HTTP → HTTPS redirect
* application loading correctly

---

# 32. Phase 11 — Continuous Deployment

Now connect GitHub Actions to the VPS.

The production flow becomes:

```text
Developer
    ↓
git push
    ↓
GitHub
    ↓
GitHub Actions
    ↓
CI
    ↓
Docker Build
    ↓
Security Scan
    ↓
Push Image
    ↓
SSH VPS
    ↓
Pull New Image
    ↓
Docker Compose
    ↓
Health Check
    ↓
Production
```

---

# 33. SSH Deployment

Create an SSH key locally:

```bash
ssh-keygen -t ed25519
```

Copy the public key to the VPS.

The private key should be stored in GitHub Secrets.

Example secret:

```text
VPS_SSH_PRIVATE_KEY
```

Other secrets:

```text
VPS_HOST
VPS_USER
```

Never put private keys directly inside GitHub workflow files.

---

# 34. Example Deployment Step

A simplified deployment step:

```yaml
- name: Deploy to VPS
  uses: appleboy/ssh-action@v1
  with:
    host: ${{ secrets.VPS_HOST }}
    username: ${{ secrets.VPS_USER }}
    key: ${{ secrets.VPS_SSH_PRIVATE_KEY }}

    script: |
      cd /opt/my-app

      docker compose pull

      docker compose up -d

      docker image prune -f
```

---

# 35. Production Deployment Directory

A clean VPS structure:

```text
/opt/
└── my-app/
    ├── docker-compose.yml
    ├── .env
    └── deployment/
```

Application source code does not necessarily need to be cloned to the server.

The server can simply pull the production Docker image.

---

# 36. Image-Based Deployment

The recommended approach is:

```text
GitHub
   ↓
Build Image
   ↓
Registry
   ↓
VPS
   ↓
Pull Image
   ↓
Run Container
```

Instead of:

```text
GitHub
   ↓
VPS
   ↓
npm install
   ↓
npm build
   ↓
npm start
```

The first approach gives you a consistent production environment.

---

# 37. Phase 12 — Health Checks

A production application should have a health check.

Example endpoint:

```text
GET /api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

The container can check:

```text
Application
    ↓
Health Endpoint
    ↓
200 OK
```

If the application becomes unhealthy:

```text
❌ Health Check
       ↓
Container considered unhealthy
```

---

# 38. Docker Healthcheck

Example:

```yaml
healthcheck:
  test:
    [
      "CMD",
      "wget",
      "--no-verbose",
      "--tries=1",
      "--spider",
      "http://localhost:3000/api/health"
    ]

  interval: 30s
  timeout: 10s
  retries: 3
```

Check:

```bash
docker ps
```

---

# 39. Phase 13 — Logging

View container logs:

```bash
docker logs my-app
```

With Compose:

```bash
docker compose logs
```

Follow logs:

```bash
docker compose logs -f
```

View only application logs:

```bash
docker compose logs app
```

---

# 40. Log Management

Do not allow logs to grow forever.

Configure Docker log rotation.

Example:

```yaml
services:

  app:
    image: USERNAME/my-app:latest

    logging:
      driver: json-file

      options:
        max-size: "10m"
        max-file: "3"
```

This prevents unlimited log growth.

---

# 41. Phase 14 — Monitoring

A professional production environment should know whether the application is available.

Start with a simple monitoring solution.

## Uptime Kuma

Uptime Kuma can monitor:

```text
https://example.com
```

It can show:

```text
UP
DOWN
Response Time
Uptime
```

---

# 42. Advanced Monitoring

For more advanced DevOps practice:

```text
Application
     ↓
Prometheus
     ↓
Grafana
```

Prometheus collects metrics.

Grafana visualizes metrics.

Example dashboard:

```text
CPU Usage
Memory Usage
Disk Usage
Request Rate
Response Time
Container Status
```

---

# 43. Centralized Logging

For advanced practice:

```text
Application
     ↓
Logs
     ↓
Loki
     ↓
Grafana
```

This allows centralized log searching and visualization.

---

# 44. Phase 15 — Rollback

A production deployment should support rollback.

Suppose:

```text
Version 1.0.1
```

is working.

You deploy:

```text
Version 1.0.2
```

but it contains a bug.

You should be able to return to:

```text
Version 1.0.1
```

---

# 45. Why Image Tags Matter

Bad approach:

```text
my-app:latest
```

Better:

```text
my-app:1.0.1
my-app:1.0.2
my-app:1.0.3
```

Or:

```text
my-app:a82f91c
```

Then rollback becomes possible.

---

# 46. Simple Rollback

Change the image:

```yaml
image: USERNAME/my-app:1.0.1
```

Then:

```bash
docker compose pull
docker compose up -d
```

Now the old version is running again.

---

# 47. Deployment Strategy

For a simple VPS project:

```text
Pull New Image
      ↓
Stop/Replace Container
      ↓
Start New Container
      ↓
Health Check
```

For more advanced infrastructure, you can learn:

```text
Blue-Green Deployment
Rolling Deployment
Canary Deployment
```

---

# 48. Blue-Green Deployment

Example:

```text
             Nginx
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
   Blue v1.0        Green v1.1
   Production        New Version
```

After testing:

```text
Nginx
  ↓
Green v1.1
```

Blue can remain available for rollback.

---

# 49. Phase 16 — Production Security

Security should be considered at every layer.

## GitHub

Use:

* protected main branch
* Pull Requests
* required checks
* secret management
* dependency scanning

---

## Docker

Use:

* minimal base images
* multi-stage builds
* non-root user
* vulnerability scanning
* `.dockerignore`

---

## VPS

Use:

* SSH keys
* firewall
* regular updates
* non-root deployment user
* restricted ports

---

## Nginx

Use:

* HTTPS
* security headers
* rate limiting where appropriate
* restricted upstream access

---

# 50. SSH Security

Prefer:

```text
SSH Key Authentication
```

over:

```text
Password Authentication
```

After confirming key authentication works, password-based SSH can be disabled carefully.

Never disable SSH access before verifying the alternative login method.

---

# 51. Exposed Ports

Ideally expose:

```text
22   SSH
80   HTTP
443  HTTPS
```

Do not expose:

```text
3000
```

to the public internet when Nginx is acting as the reverse proxy.

Architecture:

```text
Internet
   │
   ├── 80
   └── 443
        ↓
      Nginx
        ↓
   Internal Network
        ↓
   Next.js :3000
```

---

# 52. Secrets Management

Never commit:

```text
.env
.env.production
private keys
API keys
database passwords
tokens
```

Use:

```text
GitHub Secrets
```

for CI/CD secrets.

Example:

```text
DOCKER_USERNAME
DOCKER_PASSWORD
VPS_HOST
VPS_USER
VPS_SSH_PRIVATE_KEY
```

---

# 53. GitHub Secrets Flow

```text
GitHub Secret
      ↓
GitHub Actions
      ↓
Deployment
      ↓
VPS
```

Secrets should never be printed in logs.

Avoid:

```yaml
run: echo ${{ secrets.MY_SECRET }}
```

---

# 54. Recommended Repository Structure

A professional repository can look like:

```text
my-devops-project/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── app/
│
├── components/
│
├── public/
│
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── docker-compose.prod.yml
│
├── nginx/
│   └── nginx.conf
│
├── scripts/
│   ├── deploy.sh
│   └── rollback.sh
│
├── tests/
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── next.config.ts
```

The exact structure can change depending on the application.

---

# 55. Recommended Git Branching Strategy

For a small project:

```text
main
  │
  ├── feature/*
  ├── fix/*
  └── chore/*
```

Example:

```bash
git checkout -b feature/docker
```

After completing the feature:

```text
feature/docker
      ↓
Pull Request
      ↓
CI
      ↓
Code Review
      ↓
main
```

---

# 56. Pull Request Workflow

Professional workflow:

```text
Create Branch
      ↓
Write Code
      ↓
Commit
      ↓
Push
      ↓
Create Pull Request
      ↓
GitHub Actions
      ↓
Lint
      ↓
Tests
      ↓
Build
      ↓
Review
      ↓
Merge
      ↓
CD
      ↓
Production
```

---

# 57. Commit Message Examples

Use meaningful commit messages.

Good:

```text
feat: add Docker production build
fix: resolve weather API error
ci: add Docker image build workflow
ci: add security scanning
deploy: configure VPS deployment
infra: add nginx reverse proxy
docs: update deployment guide
```

Avoid:

```text
update
changes
final
new
abc
```

---

# 58. Complete CI/CD Pipeline

A professional pipeline can be structured as:

```text
                    ┌─────────────┐
                    │   GitHub    │
                    └──────┬──────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ GitHub Actions  │
                  └────────┬────────┘
                           │
             ┌─────────────┼──────────────┐
             ▼             ▼              ▼
           Lint          Tests       Type Check
             │             │              │
             └─────────────┼──────────────┘
                           ▼
                       Build App
                           │
                           ▼
                    Docker Build
                           │
                           ▼
                     Security Scan
                           │
                           ▼
                  Push Container Image
                           │
                           ▼
                    Container Registry
                           │
                           ▼
                         VPS
                           │
                           ▼
                   Docker Compose
                           │
                           ▼
                      Health Check
                           │
                           ▼
                        Nginx
                           │
                           ▼
                     HTTPS / SSL
                           │
                           ▼
                      Production
```

---

# 59. CI vs CD

## Continuous Integration

CI means automatically checking the code whenever developers push changes or create Pull Requests.

```text
Push
 ↓
Lint
 ↓
Test
 ↓
Type Check
 ↓
Build
```

---

## Continuous Deployment

CD means automatically deploying a successfully built version.

```text
CI Passed
 ↓
Docker Build
 ↓
Push Image
 ↓
VPS
 ↓
Deploy
```

---

# 60. Production Deployment Flow

The final production flow should look like:

```text
Developer
     │
     ▼
Feature Branch
     │
     ▼
Pull Request
     │
     ▼
GitHub Actions
     │
     ├── Lint
     ├── Tests
     ├── Type Check
     ├── Build
     └── Security
     │
     ▼
Merge to Main
     │
     ▼
Docker Build
     │
     ▼
Docker Image
     │
     ▼
Container Registry
     │
     ▼
VPS
     │
     ▼
Docker Compose
     │
     ▼
Health Check
     │
     ▼
Nginx
     │
     ▼
HTTPS
     │
     ▼
Custom Domain
     │
     ▼
Production
```

---

# 61. Production Checklist

## Git

* [ ] Git repository created
* [ ] `.gitignore` configured
* [ ] Meaningful commits
* [ ] Branch strategy
* [ ] Pull Requests

## CI

* [ ] GitHub Actions configured
* [ ] Dependencies installed with `npm ci`
* [ ] Linting
* [ ] Tests
* [ ] Type checking
* [ ] Production build

## Docker

* [ ] Dockerfile created
* [ ] Multi-stage build
* [ ] `.dockerignore`
* [ ] Small base image
* [ ] Non-root user
* [ ] Health check
* [ ] Local Docker test

## Security

* [ ] Dependency scanning
* [ ] Docker image scanning
* [ ] No secrets in Git
* [ ] SSH key authentication
* [ ] Firewall
* [ ] Server updates

## Registry

* [ ] Registry account
* [ ] GitHub secrets
* [ ] Image pushed automatically
* [ ] Versioned image tags

## VPS

* [ ] Ubuntu installed
* [ ] Docker installed
* [ ] Docker Compose installed
* [ ] Firewall configured
* [ ] Deployment user created

## Nginx

* [ ] Nginx installed
* [ ] Reverse proxy configured
* [ ] Application port protected
* [ ] Configuration tested

## Domain

* [ ] Domain purchased/configured
* [ ] DNS A record
* [ ] DNS propagation verified

## HTTPS

* [ ] Let's Encrypt certificate
* [ ] HTTPS enabled
* [ ] HTTP redirect
* [ ] Certificate renewal

## CD

* [ ] SSH deployment
* [ ] Automatic image pull
* [ ] Automatic container update
* [ ] Health check
* [ ] Deployment logs

## Monitoring

* [ ] Application health endpoint
* [ ] Uptime monitoring
* [ ] Container logs
* [ ] Resource monitoring

## Recovery

* [ ] Versioned images
* [ ] Rollback procedure
* [ ] Backup strategy
* [ ] Disaster recovery plan

---

# 62. Recommended Learning Order

Do not try to learn everything simultaneously.

Follow this order:

```text
1. Git
   ↓
2. GitHub
   ↓
3. GitHub Actions
   ↓
4. CI
   ↓
5. Docker
   ↓
6. Dockerfile
   ↓
7. Docker Compose
   ↓
8. Container Registry
   ↓
9. Linux
   ↓
10. VPS
   ↓
11. SSH
   ↓
12. Nginx
   ↓
13. DNS
   ↓
14. HTTPS
   ↓
15. CD
   ↓
16. Security
   ↓
17. Monitoring
   ↓
18. Logging
   ↓
19. Rollback
   ↓
20. Advanced Deployment
```

---

# 63. Beginner → Intermediate → Advanced

## Beginner

Learn:

```text
Git
GitHub
Linux basics
Docker
Dockerfile
Docker Compose
```

---

## Intermediate

Learn:

```text
GitHub Actions
CI/CD
Docker Registry
VPS
SSH
Nginx
DNS
HTTPS
Secrets
```

---

## Advanced

Learn:

```text
Security Scanning
Monitoring
Prometheus
Grafana
Centralized Logging
Blue-Green Deployment
Canary Deployment
Infrastructure as Code
Terraform
Ansible
Kubernetes
```

---

# 64. Future Improvements

After completing this project, extend it with:

## Infrastructure as Code

Learn:

```text
Terraform
```

Instead of manually creating infrastructure:

```text
Terraform
   ↓
VPS / Cloud Infrastructure
```

---

## Configuration Management

Learn:

```text
Ansible
```

Example:

```text
Ansible
   ↓
Install Docker
Install Nginx
Configure Firewall
Configure Server
```

---

## Kubernetes

After becoming comfortable with Docker and Docker Compose:

```text
Docker Compose
      ↓
Kubernetes
```

Learn:

```text
Pods
Deployments
Services
ConfigMaps
Secrets
Ingress
Namespaces
Helm
```

---

# 65. Final Professional Architecture

The final architecture for this practice project is:

```text
                              ┌──────────────────┐
                              │     Developer    │
                              └────────┬─────────┘
                                       │
                                       ▼
                              ┌──────────────────┐
                              │      GitHub      │
                              │                  │
                              │ Source Code      │
                              │ Pull Requests    │
                              └────────┬─────────┘
                                       │
                                       ▼
                         ┌─────────────────────────┐
                         │     GitHub Actions      │
                         │                         │
                         │ CI                      │
                         │ ├── Lint                │
                         │ ├── Test                │
                         │ ├── Type Check         │
                         │ ├── Build               │
                         │ └── Security Scan       │
                         │                         │
                         │ CD                      │
                         │ ├── Docker Build        │
                         │ ├── Image Scan          │
                         │ └── Push Image          │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │   Docker Hub / GHCR     │
                         │                         │
                         │ Versioned Images        │
                         └────────────┬────────────┘
                                      │
                                      ▼
                ┌─────────────────────────────────────────┐
                │                 CLOUD VPS                │
                │                                         │
                │  ┌───────────────────────────────────┐  │
                │  │              Nginx                 │  │
                │  │         Reverse Proxy              │  │
                │  │         HTTPS / SSL                │  │
                │  └────────────────┬──────────────────┘  │
                │                   │                     │
                │                   ▼                     │
                │  ┌───────────────────────────────────┐  │
                │  │          Docker Compose           │  │
                │  │                                   │  │
                │  │  ┌─────────────────────────────┐  │  │
                │  │  │       Next.js Container     │  │  │
                │  │  │                             │  │  │
                │  │  │       Production App       │  │  │
                │  │  └─────────────────────────────┘  │  │
                │  │                                   │  │
                │  │  Health Checks                    │  │
                │  │  Restart Policies                │  │
                │  │  Resource Controls               │  │
                │  └───────────────────────────────────┘  │
                │                                         │
                │  Monitoring / Logging                   │
                └────────────────────┬────────────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │ Custom Domain│
                              │     HTTPS    │
                              └──────────────┘
```

---

# 66. What This Project Demonstrates

After completing this project, you can confidently demonstrate practical knowledge of:

```text
✅ Git
✅ GitHub
✅ GitHub Actions
✅ Continuous Integration
✅ Continuous Deployment
✅ Docker
✅ Dockerfile
✅ Multi-stage Docker builds
✅ Docker Compose
✅ Container Registry
✅ Linux
✅ Ubuntu
✅ SSH
✅ Cloud VPS
✅ Nginx
✅ Reverse Proxy
✅ DNS
✅ HTTPS
✅ SSL/TLS
✅ Let's Encrypt
✅ Secrets Management
✅ Container Security
✅ Dependency Security
✅ Image Scanning
✅ Health Checks
✅ Logging
✅ Monitoring
✅ Rollback
✅ Production Deployment
```

This is a strong foundation for moving toward:

```text
Terraform
     ↓
Ansible
     ↓
Kubernetes
     ↓
Helm
     ↓
Prometheus + Grafana
     ↓
Advanced Cloud DevOps
```

---

# 🎯 Final Goal

The final goal is not simply:

```text
"My website is deployed."
```

The goal is to build a repeatable system where:

```text
Developer
    ↓
Push Code
    ↓
Automated CI
    ↓
Automated Security Checks
    ↓
Docker Image
    ↓
Container Registry
    ↓
Automated Deployment
    ↓
Production VPS
    ↓
Nginx
    ↓
HTTPS
    ↓
Monitoring
    ↓
Rollback if necessary
```

That is the core of a professional DevOps workflow.

---

## 🚀 Final Architecture

```text
GitHub
   ↓
GitHub Actions
   ↓
CI
 ├── Lint
 ├── Test
 ├── Type Check
 ├── Build
 └── Security Scan
   ↓
Docker Build
   ↓
Docker Image
   ↓
Docker Hub / GHCR
   ↓
Cloud VPS
   ↓
Docker Compose
   ↓
Next.js Container
   ↓
Nginx
   ↓
HTTPS / SSL
   ↓
Custom Domain
   ↓
Monitoring + Logging
   ↓
Production
```

**This architecture is suitable as a practical DevOps portfolio project and can later be extended toward Terraform, Ansible, Kubernetes, and advanced cloud infrastructure.**


# 67. 🌐 Getting the Website Live and Searchable on Google

Deploying a website to a VPS is only one part of going live.

A complete production website should follow this flow:

```text
Developer
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Docker
    ↓
Container Registry
    ↓
Cloud VPS
    ↓
Docker Compose
    ↓
Nginx
    ↓
Domain
    ↓
HTTPS
    ↓
Production Website
    ↓
SEO Optimization
    ↓
Google Search Console
    ↓
Sitemap
    ↓
Google Crawling
    ↓
Google Indexing
    ↓
Google Search Results
```

---

# 68. How a Website Appears on Google

There are three important concepts:

### 1. Crawling

Google discovers and visits your website.

```text
Googlebot
    ↓
Your Website
```

### 2. Indexing

Google analyzes your pages and stores information about them in its search index.

```text
Your Page
    ↓
Google Analysis
    ↓
Google Index
```

### 3. Ranking

When someone searches for something, Google decides which indexed pages should appear and in what order.

```text
User Search
    ↓
Google
    ↓
Search Index
    ↓
Ranking System
    ↓
Search Results
```

Getting indexed does **not** guarantee a high ranking.

---

# 69. Complete Google Search Architecture

```text
                         ┌──────────────────┐
                         │     Developer    │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │      GitHub      │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │ GitHub Actions   │
                         └────────┬─────────┘
                                  │
                                  ▼
                              Docker
                                  │
                                  ▼
                           Container Registry
                                  │
                                  ▼
                              Cloud VPS
                                  │
                                  ▼
                            Docker Compose
                                  │
                                  ▼
                              Next.js
                                  │
                                  ▼
                              Nginx
                                  │
                                  ▼
                         HTTPS / SSL
                                  │
                                  ▼
                         example.com
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
              Googlebot                  Real Users
                    │
                    ▼
             Crawl Website
                    │
                    ▼
              Read Sitemap
                    │
                    ▼
               Index Pages
                    │
                    ▼
             Google Search
                    │
                    ▼
             Search Results
```

---

# 70. Step 1 — Buy a Domain

You need a domain such as:

```text
example.com
```

Possible domain extensions:

```text
.com
.dev
.pk
.net
.org
```

For a professional portfolio or project:

```text
.com
```

is usually a good choice when available.

---

# 71. Step 2 — Configure DNS

Point your domain toward your VPS.

Create an `A` record:

```text
Type: A
Name: @
Value: YOUR_VPS_IP
```

For `www`:

```text
Type: A
Name: www
Value: YOUR_VPS_IP
```

The flow becomes:

```text
example.com
      ↓
DNS
      ↓
VPS IP Address
      ↓
Nginx
      ↓
Docker Container
      ↓
Next.js
```

---

# 72. Step 3 — Configure Nginx

Nginx receives requests for your domain.

Example:

```nginx
server {
    listen 80;

    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Now:

```text
http://example.com
        ↓
      Nginx
        ↓
Next.js Container
```

---

# 73. Step 4 — Enable HTTPS

Use Let's Encrypt and Certbot.

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Then:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

Now your website should be:

```text
https://example.com
```

HTTPS is important for:

* security
* user trust
* modern browsers
* SEO
* protecting data

---

# 74. Step 5 — Make Sure the Website Is Public

Open:

```text
https://example.com
```

The website must be accessible without:

```text
localhost
127.0.0.1
private IP
VPN
authentication
```

Google needs to be able to access the public pages.

---

# 75. Step 6 — Configure Next.js Metadata

SEO starts inside the application.

For Next.js App Router, configure metadata.

Example:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather Forecast Dashboard",
  description:
    "Check current weather and forecast information for cities around the world.",
  keywords: [
    "weather",
    "weather forecast",
    "weather dashboard",
  ],
};
```

This information helps search engines understand your page.

---

# 76. Page-Specific Metadata

Different pages should have meaningful titles and descriptions.

Example:

```text
Homepage
    ↓
Weather Forecast Dashboard

Faisalabad Page
    ↓
Weather in Faisalabad | Weather Forecast

Lahore Page
    ↓
Weather in Lahore | Weather Forecast
```

Avoid:

```text
Home
Page
Website
Untitled
```

Use descriptive titles.

---

# 77. Step 7 — Create robots.txt

Google should be able to understand which parts of your website can be crawled.

For Next.js App Router, create:

```text
app/robots.ts
```

Example:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

Your website should then provide:

```text
https://example.com/robots.txt
```

---

# 78. Step 8 — Create sitemap.xml

A sitemap tells search engines which URLs exist on your website.

For Next.js App Router:

```text
app/sitemap.ts
```

Example:

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
    },
    {
      url: "https://example.com/about",
      lastModified: new Date(),
    },
  ];
}
```

Now:

```text
https://example.com/sitemap.xml
```

should be accessible.

---

# 79. Why Sitemap Is Important

Without a sitemap:

```text
Google
   ↓
Try to discover pages
```

With a sitemap:

```text
Google
   ↓
sitemap.xml
   ↓
List of important URLs
   ↓
Crawl Pages
```

A sitemap does not guarantee indexing, but it helps Google discover URLs.

---

# 80. Step 9 — Test robots.txt

Open:

```text
https://example.com/robots.txt
```

You should see something similar to:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

---

# 81. Step 10 — Test Sitemap

Open:

```text
https://example.com/sitemap.xml
```

Make sure it loads successfully.

Example:

```xml
<urlset>
    <url>
        <loc>https://example.com/</loc>
    </url>

    <url>
        <loc>https://example.com/about</loc>
    </url>
</urlset>
```

---

# 82. Step 11 — Create Google Search Console

Go to:

```text
https://search.google.com/search-console
```

Sign in with your Google account.

Google Search Console is the main tool you use to communicate with Google about your website.

It provides information about:

* indexing
* search queries
* impressions
* clicks
* average position
* indexing problems
* sitemap status
* mobile usability
* Core Web Vitals
* security issues

---

# 83. Step 12 — Add Your Website

Google Search Console provides property types.

For a complete domain:

```text
Domain property
```

Example:

```text
example.com
```

This covers:

```text
https://example.com
https://www.example.com
```

and other protocol/subdomain variations associated with the domain.

---

# 84. Step 13 — Verify Domain Ownership

Google needs to verify that you control the domain.

A common method is adding a DNS TXT record.

Google provides something similar to:

```text
Type: TXT
Host: @
Value: google-site-verification=XXXXXXXX
```

Add that record in your domain's DNS settings.

Then return to Google Search Console and click:

```text
Verify
```

---

# 85. Step 14 — Submit Sitemap

Inside Google Search Console:

```text
Sitemaps
    ↓
Add a new sitemap
```

Enter:

```text
sitemap.xml
```

or:

```text
https://example.com/sitemap.xml
```

Submit it.

You should eventually see:

```text
Success
```

---

# 86. Step 15 — Request Indexing

Use the URL Inspection tool in Google Search Console.

Enter:

```text
https://example.com/
```

Google will check the URL.

If appropriate, request indexing.

For example:

```text
URL Inspection
      ↓
Enter URL
      ↓
Test Live URL
      ↓
Request Indexing
```

You can repeat this for important pages.

---

# 87. Important: Indexing Is Not Instant

After requesting indexing, Google may take time to crawl and index your website.

There is no guaranteed fixed time.

It can depend on:

* website accessibility
* site quality
* content
* crawlability
* internal links
* website reputation
* Google's crawling systems

Therefore:

```text
Request Indexing
       ≠
Immediately appearing in Google
```

---

# 88. Step 16 — Check Whether Google Indexed the Website

Use Google search:

```text
site:example.com
```

For example:

```text
site:example.com
```

If pages have been indexed, Google may show them.

You can also inspect URLs inside Search Console.

---

# 89. Step 17 — Improve SEO

Getting indexed is only the beginning.

To improve search visibility:

### Use meaningful titles

```text
Weather Forecast for Faisalabad | Example
```

instead of:

```text
Home
```

### Use useful descriptions

Explain what the page provides.

### Use headings

```html
<h1>Weather Forecast for Faisalabad</h1>

<h2>Today's Weather</h2>

<h2>7-Day Forecast</h2>
```

### Create useful content

Search engines need meaningful content to understand what your page is about.

---

# 90. Step 18 — Semantic HTML

Use HTML elements according to their purpose.

Good:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use headings in a logical hierarchy:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

---

# 91. Step 19 — Image SEO

Use meaningful `alt` text.

Bad:

```tsx
<img src="/weather.png" alt="image" />
```

Better:

```tsx
<img
  src="/weather.png"
  alt="Weather forecast dashboard showing temperature and precipitation"
/>
```

Also optimize image sizes.

For Next.js, prefer:

```tsx
import Image from "next/image";
```

where appropriate.

---

# 92. Step 20 — Mobile-Friendly Website

Your website should work properly on:

```text
Mobile
Tablet
Laptop
Desktop
```

Google uses mobile-first indexing for websites, so mobile usability is important.

Test:

```text
320px
375px
414px
768px
1024px
1440px
```

---

# 93. Step 21 — Website Performance

A production website should load quickly.

Focus on:

```text
Fast server response
Optimized images
Small JavaScript bundles
Caching
Compression
CDN where appropriate
Efficient API calls
```

For Next.js, use its built-in optimization features where appropriate.

---

# 94. Step 22 — Core Web Vitals

Google evaluates important user-experience metrics.

The main Core Web Vitals are:

```text
LCP
INP
CLS
```

### LCP

Largest Contentful Paint.

Measures loading performance.

### INP

Interaction to Next Paint.

Measures responsiveness to user interaction.

### CLS

Cumulative Layout Shift.

Measures visual stability.

A good production website should aim for healthy Core Web Vitals.

---

# 95. Step 23 — Internal Links

Help Google discover your pages through internal links.

Example:

```text
Home
 ├── About
 ├── Weather
 │    ├── Faisalabad
 │    ├── Lahore
 │    └── Islamabad
 └── Contact
```

This creates a clear site structure.

---

# 96. Step 24 — Canonical URLs

When similar or duplicate URLs exist, canonical URLs can tell search engines which URL is preferred.

In Next.js metadata:

```typescript
export const metadata = {
  alternates: {
    canonical: "https://example.com/",
  },
};
```

Use canonical URLs carefully, especially on sites with dynamic pages.

---

# 97. Step 25 — Structured Data

For some websites, structured data can help search engines understand content.

Examples include:

```text
Article
Product
Organization
LocalBusiness
BreadcrumbList
```

Structured data does not guarantee special search-result features.

Only use schema appropriate to the actual content.

---

# 98. Step 26 — Google Search Performance

After Google starts receiving data, Search Console can show:

```text
Total Clicks
Total Impressions
Average CTR
Average Position
```

Example:

```text
Search Query
     ↓
Google Result
     ↓
Impression
     ↓
User Click
     ↓
Website
```

---

# 99. SEO and DevOps Are Connected

A professional production workflow now looks like:

```text
                 DEVELOPMENT
                      │
                      ▼
                   GitHub
                      │
                      ▼
                CI / Testing
                      │
                      ▼
                   Docker
                      │
                      ▼
                Image Registry
                      │
                      ▼
                    VPS
                      │
                      ▼
                 Docker Compose
                      │
                      ▼
                   Nginx
                      │
                      ▼
                  HTTPS
                      │
                      ▼
                   Domain
                      │
                      ▼
                Production
                      │
             ┌────────┴────────┐
             ▼                 ▼
            SEO             Monitoring
             │                 │
             ▼                 ▼
      Google Search       Uptime / Logs
        Console
             │
             ▼
        Google Index
             │
             ▼
       Google Search
```

---

# 100. Complete Live Website Process

This is the complete process you should understand:

```text
STEP 1
Develop Application
        ↓

STEP 2
Push Code to GitHub
        ↓

STEP 3
GitHub Actions CI
        ↓
Lint
Test
Type Check
Build
        ↓

STEP 4
Build Docker Image
        ↓

STEP 5
Security Scan
        ↓

STEP 6
Push Image to Docker Hub / GHCR
        ↓

STEP 7
Create Cloud VPS
        ↓

STEP 8
Install Docker
        ↓

STEP 9
Configure Docker Compose
        ↓

STEP 10
Deploy Container
        ↓

STEP 11
Configure Nginx
        ↓

STEP 12
Buy / Configure Domain
        ↓

STEP 13
Point DNS to VPS
        ↓

STEP 14
Configure HTTPS
        ↓

STEP 15
Website Becomes Live
        ↓

STEP 16
Configure Next.js SEO
        ↓

STEP 17
Create robots.txt
        ↓

STEP 18
Create sitemap.xml
        ↓

STEP 19
Create Google Search Console
        ↓

STEP 20
Verify Domain
        ↓

STEP 21
Submit Sitemap
        ↓

STEP 22
Request Indexing
        ↓

STEP 23
Google Crawls Website
        ↓

STEP 24
Google Indexes Pages
        ↓

STEP 25
Google Search Results
        ↓

STEP 26
Monitor Search Performance
        ↓

STEP 27
Improve SEO
```

---

# 101. Final Production + Google Architecture

```text
                              ┌──────────────┐
                              │   Developer  │
                              └──────┬───────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │    GitHub    │
                              └──────┬───────┘
                                     │
                                     ▼
                         ┌─────────────────────┐
                         │   GitHub Actions    │
                         │                     │
                         │ Lint                │
                         │ Tests               │
                         │ Type Check          │
                         │ Build               │
                         │ Security Scan       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                              Docker Build
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Docker Hub / GHCR   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Cloud VPS      │
                         │                     │
                         │   Docker Compose    │
                         │         │           │
                         │         ▼           │
                         │   Next.js Container │
                         │         │           │
                         │         ▼           │
                         │       Nginx         │
                         └─────────┬───────────┘
                                   │
                                   ▼
                              HTTPS / SSL
                                   │
                                   ▼
                              DNS / Domain
                                   │
                                   ▼
                           🌍 LIVE WEBSITE
                                   │
                  ┌────────────────┼────────────────┐
                  │                │                │
                  ▼                ▼                ▼
              SEO Setup       Monitoring       Analytics
                  │
                  ▼
             robots.txt
                  │
                  ▼
             sitemap.xml
                  │
                  ▼
        Google Search Console
                  │
                  ▼
           Google Crawling
                  │
                  ▼
            Google Index
                  │
                  ▼
          🔎 Google Search
```

---

# 102. Important Difference

Remember:

```text
Deployment
    ≠
Google Indexing
    ≠
Google Ranking
```

They are three different stages.

### Deployment

Makes your website available on the internet.

```text
example.com
      ↓
Live Website
```

### Indexing

Makes Google aware of and able to include your pages in its search index.

```text
Website
   ↓
Googlebot
   ↓
Google Index
```

### Ranking

Determines where your page appears for a particular search.

```text
User Search
     ↓
Google
     ↓
Ranking
     ↓
Search Results
```

---

# 103. Final Production Checklist

## 🌐 Website

* [ ] Application deployed
* [ ] Custom domain configured
* [ ] DNS configured
* [ ] HTTPS enabled
* [ ] HTTP redirects to HTTPS
* [ ] Website accessible publicly

## 🔎 SEO

* [ ] Meaningful page titles
* [ ] Meta descriptions
* [ ] Correct headings
* [ ] Semantic HTML
* [ ] Mobile responsive
* [ ] Optimized images
* [ ] Internal links
* [ ] Canonical URLs where needed
* [ ] robots.txt
* [ ] sitemap.xml

## Google

* [ ] Google Search Console configured
* [ ] Domain ownership verified
* [ ] Sitemap submitted
* [ ] Important URLs inspected
* [ ] Indexing requested where appropriate
* [ ] `site:example.com` checked
* [ ] Search performance monitored

## ⚙️ DevOps

* [ ] GitHub
* [ ] GitHub Actions
* [ ] CI pipeline
* [ ] Docker
* [ ] Multi-stage Dockerfile
* [ ] Security scanning
* [ ] Container registry
* [ ] VPS
* [ ] Docker Compose
* [ ] Nginx
* [ ] HTTPS
* [ ] Health checks
* [ ] Logging
* [ ] Monitoring
* [ ] Rollback strategy

---

# 🎯 Complete DevOps + Google Goal

The ultimate workflow is:

```text
Developer
    ↓
GitHub
    ↓
GitHub Actions
    ↓
CI
    ↓
Security
    ↓
Docker
    ↓
Container Registry
    ↓
Cloud VPS
    ↓
Docker Compose
    ↓
Next.js
    ↓
Nginx
    ↓
HTTPS
    ↓
Custom Domain
    ↓
🌍 Live Website
    ↓
SEO
    ↓
robots.txt
    ↓
sitemap.xml
    ↓
Google Search Console
    ↓
Google Crawl
    ↓
Google Index
    ↓
🔎 Google Search Results
    ↓
📊 Search Performance
    ↓
Continuous Improvement
```

This gives you a **complete end-to-end DevOps + production + SEO + Google Search practice project**, rather than stopping at simply deploying the application.


