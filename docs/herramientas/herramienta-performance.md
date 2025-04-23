---
sidebar_position: 3
---

# Herramienta Performance

La herramienta Performance (Rendimiento) de las DevTools te permite analizar en profundidad el rendimiento de tu sitio web, identificar cuellos de botella y optimizar la experiencia del usuario.

## Principios básicos

La pestaña Performance te permite:

1. **Grabar** la actividad de rendimiento durante un período específico
2. **Analizar** los resultados para identificar problemas
3. **Optimizar** tu código en función de los datos recopilados

## Realizar una grabación

Para grabar la actividad de rendimiento:

1. Abre las DevTools y navega a la pestaña Performance
2. Haz clic en el botón "Record" (círculo)
3. Realiza las acciones que quieres analizar en la página
4. Haz clic en "Stop" para detener la grabación
5. Los resultados se mostrarán en el panel

Puedes también:
- **Simular un dispositivo móvil**: Activa la emulación de dispositivos
- **Simular una red más lenta**: Usa las opciones de throttling
- **Limpiar la caché y recargar**: Para analizar una carga de página inicial realista

## Interpretación de resultados

La grabación muestra diversos gráficos y líneas de tiempo:

### Descripción general

- **FPS (Frames per Second)**: La barra verde muestra los cuadros por segundo durante la grabación; las barras rojas indican frames perdidos (jank)
- **CPU**: Muestra la actividad de CPU categorizada por colores (parsing, rendering, scripting, etc.)
- **Network**: Visualiza las solicitudes de red y su duración
- **Main**: Detalla la actividad en el hilo principal del navegador

### Métricas de rendimiento

Las métricas clave incluyen:

- **First Paint (FP)**: Momento en que comienza a mostrarse algo en pantalla
- **First Contentful Paint (FCP)**: Cuando aparece el primer texto o imagen
- **Largest Contentful Paint (LCP)**: Cuando se carga el contenido principal
- **Total Blocking Time (TBT)**: Tiempo en que el hilo principal está bloqueado
- **Cumulative Layout Shift (CLS)**: Medida de inestabilidad visual

## Identificación de problemas comunes

La herramienta ayuda a identificar:

### Long Tasks (Tareas largas)

Tareas que bloquean el hilo principal durante más de 50ms, provocando retrasos en la respuesta de la interfaz.

### Layout Shifts (Cambios de diseño)

Elementos que cambian de posición después de cargarse, causando una experiencia frustrante.

### Jank (Tartamudeo)

Frames perdidos que hacen que las animaciones o desplazamientos no sean fluidos.

## Análisis de Call Tree (Árbol de llamadas)

El árbol de llamadas muestra:

- Qué funciones consumieron más tiempo de CPU
- Cuántas veces se llamó cada función
- El árbol de llamadas completo (qué función llamó a qué)

Para analizar eficientemente:

1. Ordena por "Self Time" para ver qué funciones consumen más tiempo directamente
2. Busca funciones repetitivas que podrían optimizarse
3. Examina las funciones con tiempos sorprendentemente largos

## Optimización basada en datos

Con la información recopilada, puedes:

1. **Optimizar JavaScript costoso**: Identificar y refactorizar funciones que consumen demasiada CPU
2. **Reducir reflows y repaints**: Minimizar cambios en el diseño que fuerzan al navegador a recalcular geometrías
3. **Mejorar el tiempo de respuesta**: Dividir tareas largas en chunks más pequeños usando `requestIdleCallback` o `requestAnimationFrame`
4. **Corregir layout shifts**: Reservar espacio para elementos de carga tardía como imágenes o anuncios

## Comparar rendimiento

Una técnica útil es realizar grabaciones "antes" y "después" de tus optimizaciones para:

1. Confirmar que tus cambios tienen un impacto positivo
2. Cuantificar la mejora (por ejemplo, "Reducción del 30% en el tiempo de carga")
3. Identificar posibles efectos secundarios negativos

La herramienta Performance es esencial para desarrolladores que buscan crear experiencias web fluidas y receptivas, ya que proporciona datos concretos sobre qué aspectos de tu código deben optimizarse y cuál es el impacto de tus mejoras.