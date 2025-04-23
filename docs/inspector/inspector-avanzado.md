---
sidebar_position: 3
---

# Inspector - Avanzado

En esta sección exploraremos las funcionalidades avanzadas del Inspector de Elementos que pueden ayudarte a realizar un análisis más profundo de las páginas web.

## Trabajar con elementos anidados

El DOM puede contener elementos profundamente anidados que son difíciles de seleccionar:

- **Expandir/colapsar nodos**: Utiliza las flechas junto a cada elemento para expandir o colapsar sus elementos hijos
- **Navegación por teclado**: Usa las flechas del teclado para navegar entre elementos
- **Breadcrumbs**: Usa la ruta de navegación en la parte inferior para ver la jerarquía del elemento seleccionado

## Depuración de JavaScript asociado

El Inspector permite interactuar con el JavaScript relacionado con los elementos:

- **Puntos de interrupción de eventos**: Establece puntos de interrupción para detectar cuando un elemento desencadena eventos como click, mouseover, etc.
- **Puntos de interrupción de DOM**: Detecta cuando un elemento es modificado, eliminado o añadido
- **$0 referencia**: En la consola, `$0` siempre hace referencia al elemento actualmente seleccionado

## Animar transiciones y transformaciones

Para elementos con animaciones CSS:

- **Pausa de animaciones**: Detiene temporalmente todas las animaciones CSS
- **Reproducción lenta**: Reduce la velocidad de las animaciones para analizar cada fotograma
- **Línea de tiempo de animación**: Visualiza el progreso de las animaciones en una línea de tiempo

## Emulación de dispositivos y media queries

El Inspector incluye herramientas para probar la respuesta de tu sitio en diferentes condiciones:

- **Emulación de dispositivos móviles**: Simula diferentes tamaños de pantalla y densidades de píxeles
- **Emulación de media queries**: Prueba cómo se comporta tu diseño con diferentes media queries
- **Orientación**: Cambia entre orientación vertical y horizontal

## Accesibilidad

Herramientas avanzadas para evaluar la accesibilidad de tu sitio:

- **Árbol de accesibilidad**: Visualiza cómo los lectores de pantalla interpretan tu contenido
- **Contraste de color**: Comprueba si el contraste entre texto y fondo es suficiente
- **Navegación por teclado**: Verifica que todos los elementos interactivos sean accesibles con el teclado

## Instantáneas del DOM

- **Captura instantáneas**: Guarda el estado actual del DOM para compararlo más tarde
- **Comparación**: Compara dos estados del DOM para identificar los cambios
- **Exportación**: Guarda el HTML de un elemento o de toda la página

Estas funcionalidades avanzadas te permitirán utilizar el Inspector de Elementos de manera más eficiente y efectiva para resolver problemas complejos en el desarrollo web.