Para `docs/herramientas/herramienta-network.md`:
```md
---
sidebar_position: 2
---

# Herramienta Network

La pestaña Network (Red) en las herramientas de desarrollo del navegador te permite monitorear y analizar todas las solicitudes y respuestas de red que ocurren cuando se carga y utiliza una página web. Esta herramienta es fundamental para optimizar el rendimiento y diagnosticar problemas de comunicación.

## Interfaz de la herramienta Network

La interfaz de Network generalmente incluye:

1. **Barra de control**: Contiene opciones para limpiar registros, preservar datos, filtrar solicitudes, etc.
2. **Línea de tiempo**: Muestra cuándo ocurrió cada solicitud y cuánto tiempo tardó
3. **Resumen**: Ofrece estadísticas como número total de solicitudes, cantidad de datos transferidos y tiempo de carga
4. **Tabla de solicitudes**: Lista todas las solicitudes con detalles como estado, tipo, tamaño y tiempo

## Análisis de solicitudes

Al hacer clic en cualquier solicitud, se abre un panel con información detallada:

### Pestaña Headers
- **General**: URL, método, código de estado
- **Response Headers**: Cabeceras enviadas por el servidor
- **Request Headers**: Cabeceras enviadas por el navegador
- **Query String Parameters**: Parámetros en la URL

### Pestaña Preview
Muestra una vista previa del contenido de la respuesta (útil para JSON, imágenes, etc.)

### Pestaña Response
Muestra el contenido crudo de la respuesta

### Pestaña Timing
Proporciona información detallada sobre los tiempos de cada fase de la solicitud:
- DNS Lookup
- Initial Connection
- SSL handshake
- Time to First Byte (TTFB)
- Content Download

## Filtrado de solicitudes

La herramienta Network permite filtrar solicitudes para centrarse en lo importante:

- **Por tipo**: JS, CSS, IMG, XHR, etc.
- **Por estado**: Errores (4xx, 5xx)
- **Por dominio**: Usando la sintaxis `domain:example.com`
- **Por tamaño**: Usando `larger-than:1M` o `smaller-than:50K`
- **Por contenido**: Texto en URL, cabeceras o cuerpo

## Análisis de rendimiento

Network proporciona varias herramientas para evaluar el rendimiento:

### Cascada de solicitudes
Visualiza gráficamente cuándo ocurre cada solicitud y cómo se solapan, ayudando a identificar bloqueos y cuellos de botella.

### Indicadores de rendimiento
- **DOMContentLoaded**: Cuándo se ha cargado y analizado el HTML inicial
- **Load**: Cuándo se han cargado todos los recursos

### Funciones de exportación
- **Guardar como HAR**: Permite guardar todas las solicitudes en un archivo HAR (HTTP Archive) para análisis posterior o compartir con otros desarrolladores

## Herramientas de simulación

Para probar cómo se comporta el sitio en diferentes condiciones de red:

- **Throttling**: Simula conexiones más lentas (3G, 2G, etc.)
- **Offline**: Simula la pérdida total de conexión

## Consejos para la optimización

Al usar la herramienta Network, busca:

1. **Solicitudes grandes**: Archivos que podrían beneficiarse de la compresión o optimización
2. **Solicitudes redundantes**: Recursos cargados múltiples veces
3. **Errores 404**: Recursos que no existen pero están siendo solicitados
4. **Tiempos TTFB largos**: Pueden indicar problemas con el servidor o la base de datos

La herramienta Network es esencial para cualquier desarrollador que quiera crear sitios web rápidos y eficientes, ya que proporciona información crucial sobre cómo los recursos se cargan y cómo interactúan entre sí.