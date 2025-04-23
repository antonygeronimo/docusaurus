# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.



# 🚀 Manual del Inspector - Documentación Técnica

github : https://antonygeronimo.github.io/docusaurus/

cpanel : https://901185434.senati.chat.pe/docusaurus/

<div align="center">
  <img src="https://w7.pngwing.com/pngs/663/653/png-transparent-docusaurus-favicon-logo-tech-companies-thumbnail.png" width="200" alt="Docusaurus Logo">
</div>

## ✨ Características Principales
- **Documentación estructurada** con búsqueda integrada
- **Diseño responsive** para todos los dispositivos
- **Soporte multi-idioma** (español por defecto)
- **Actualizaciones automáticas** via GitHub Actions

## 🛠️ Instalación Local
```bash
# 1. Clona el repositorio
git clone https://github.com/antonygeronimo/docusaurus.git

# 2. Instala dependencias
yarn install

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
