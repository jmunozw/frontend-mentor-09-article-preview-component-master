# 📰 Frontend Mentor – Article Preview Component  
**Solución desarrollada por Jorge Muñoz**

## 🧭 Descripción general
Proyecto realizado como parte de la **Ruta 3 – Fundamentos de JavaScript**, combinando:

- Estructura profesional basada en Git Flow  
- Maquetación responsive avanzada (mobile → tablet → desktop)  
- Accesibilidad real (ARIA, teclado, eventos)  
- Interactividad adaptada según viewport  
- Buenas prácticas de CSS moderno (propiedades lógicas, tokens, clamp, Grid + Flex)

El componente replica fielmente el diseño de Figma y añade un patrón de interacción distinto entre mobile y desktop.

---

## 🎯 El desafío
El objetivo es que los usuarios puedan:

- Ver el diseño óptimo del componente en mobile, tablet y desktop.  
- Abrir/cerrar el panel de compartir mediante el botón.  
- Cerrar el panel al hacer clic fuera o pulsar `Escape`.  
- Mantener accesibilidad correcta: `aria-controls`, `aria-expanded`.  

---

## 📱 Vista previa
*(Próxima actualización: se añadirán capturas finales)*

---

## 🔗 Enlaces
- **Repositorio:**  
  https://github.com/jmunozw/frontend-mentor-09-article-preview-component-master  

- **Demo en vivo:**  
  https://jmunozw.github.io/frontend-mentor-09-article-preview-component-master/

---

## ⚙️ Metodología profesional aplicada

### 🧩 Fases del proyecto
| Fase | Descripción | Estado |
|------|--------------|---------|
| 0 | Briefing y análisis inicial (Figma, imágenes, objetivos) | ✅ |
| 1 | Setup profesional (estructura, Git Flow, entorno) | ✅ |
| 2 | Diseño y Layout (HTML semántico, tokens, responsive) | ✅ |
| 3 | Interactividad JS (tooltip responsive + accesibilidad) | ✅ |
| 4 | QA y Deploy (revisión final + GitHub Pages) | ✅ |
| 5 | Retro final (análisis, mejoras, aprendizajes) | ✅ |

---

## 🧱 Construido con
- **HTML5 semántico y accesible**  
- **CSS3 / SCSS**  
  - Propiedades lógicas  
  - Tokens de diseño  
  - Funciones modernas (`clamp`)  
  - Grid + Flexbox  
- **JavaScript** (DOM, accesibilidad, manejo de eventos)  
- **Git Flow profesional** (`feature/*` → `dev` → `main`)  
- **Live Server** para desarrollo local  
- **GitHub Pages** para despliegue

---

## 📘 Aprendizajes principales por fase

### 🧩 Fase 0–1 – Análisis y Setup
- Cómo organizar un entorno profesional desde cero.  
- Git Flow aplicado a proyectos pequeños: ramas `feature`, `dev`, `main`.  
- Planificación estructurada en fases siguiendo un flujo tipo sprint.

---

### 🧩 Fase 2 – Diseño y Layout
- Construcción de un layout **mobile-first sólido** con escalado natural hacia tablet y desktop.  
- Uso de tokens para colores, fonts y spacing coherentes.  
- Aplicación de Grid avanzado en desktop manteniendo la imagen a toda altura.  
- Control de imágenes fluidas:  
  - `object-fit: cover`  
  - alturas dinámicas  
  - recortes limpios con `overflow`  
- Maquetación fiel a Figma en las 3 vistas principales.

---

### 🧩 Fase 3 – Interactividad JS
- Implementación de un panel de compartir **con dos comportamientos adaptativos**:
  - **Mobile:** banda inferior visible bajo el footer.  
  - **Desktop:** popover flotante centrado sobre el botón, con flecha triangular.  
- Manejo de accesibilidad:  
  - `aria-expanded`, `aria-controls`  
  - cierre con tecla **Escape**  
  - cierre con **clic fuera**  
- Listeners limpios usando funciones internas + cleanup adecuado.  
- Ajustes de `z-index`, posicionamiento relativo/absoluto y control de overflow.

---

### 🧩 Fase 4 – QA y Deploy
- Comprobación visual completa en mobile, tablet y desktop.  
- Validación de accesibilidad inicial (teclado + ARIA).  
- Limpieza final de CSS y pequeños ajustes de padding y límites.  
- Publicación en GitHub Pages sin errores.

---

### 🧩 Fase 5 – Retro final (Resumen)
- **Lo más fácil:**  
  Estructura HTML y maquetación mobile-first.

- **Lo más difícil:**  
  Posicionar el panel flotante en desktop sin romper el layout.

- **Lo más aprendido:**  
  Crear popovers accesibles y depurar interactividad avanzada.

- **Qué mejoraría:**  
  Modularización JS desde el día 1 y reducción de microajustes en tablet.

---

## 👤 Autor
**Jorge Muñoz Wunder**  
- Frontend Mentor: https://www.frontendmentor.io/profile/jmunozw  
- GitHub: https://github.com/jmunozw

---

## 🏁 Estado actual
🟢 Proyecto terminado y desplegado exitosamente.  
📅 Última actualización: **22/11/2025**
