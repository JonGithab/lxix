# Lovable - AI Voting Application

A modern "Hot or Not" style voting application where users compare stunning AI-generated portraits side-by-side. Built with React, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [https://lxix.lovable.app](https://lxix.lovable.app)

---

## ✨ Features

- **Side-by-Side Voting**: Compare two portraits and vote for your favorite
- **Swipe Gestures**: Mobile-friendly swipe right (Hot 🔥) or left (Not 👎) interactions
- **Regional Filtering**: Filter models by 20+ geographic regions
- **Persistent Progress**: All voting data saved to localStorage
- **Animated UI**: Smooth transitions powered by Framer Motion
- **Sound Effects**: Audio feedback on voting actions (Web Audio API)
- **Haptic Feedback**: Vibration patterns on mobile devices
- **Responsive Design**: Optimized for desktop and mobile

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI Component Library |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Router](https://reactrouter.com/) | Client-side Routing |
| [TanStack Query](https://tanstack.com/query) | Data Fetching |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 📁 Project Structure

```
src/
├── assets/                 # Model portrait images (220+ images)
│   ├── model1.jpg - model220.jpg
│   └── cat1.jpg - cat6.jpg
├── components/
│   ├── CatMemChex.tsx      # Main voting component (core logic)
│   ├── NavLink.tsx         # Navigation component
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       └── ...
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notifications
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── pages/
│   ├── Index.tsx           # Home page
│   └── NotFound.tsx        # 404 page
├── App.tsx                 # App root with routing
├── App.css                 # Global styles
├── index.css               # Tailwind & design tokens
└── main.tsx                # Entry point
```

---

## 🎮 Core Components

### CatMemChex.tsx

The main voting component containing:

- **Model Data**: 219 models with ID, name, image, and region
- **CatCard**: Individual portrait card with swipe/button interactions
- **Voting Logic**: Score calculation and model rotation
- **State Management**: React useState with localStorage persistence

#### Key State Variables

```typescript
const [scores, setScores] = useState<Record<number, number>>({});
const [votedModels, setVotedModels] = useState<Set<number>>(new Set());
const [currentModels, setCurrentModels] = useState<Model[]>([]);
const [selectedRegion, setSelectedRegion] = useState<string>("all");
```

#### localStorage Keys

| Key | Description |
|-----|-------------|
| `catmemchex-scores-v2` | Model scores object |
| `catmemchex-current` | Current displayed pair |
| `catmemchex-voted` | Set of voted model IDs |
| `catmemchex-region` | Active region filter |

---

## 🌍 Regional Categories

Models are categorized into 20+ regions:

- Americas: USA, Brazil, Colombia, Mexico, Argentina, Venezuela, Puerto Rico
- Europe: France, Germany, Italy, Spain, UK, Poland, Sweden, Netherlands, Czech, Ukraine, Russia
- Asia: Philippines, Japan, Korea, China, Thailand, India
- Other: Australia, Middle East, Africa, Mixed

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
# or
bun run build
```

---

## 🎨 Design System

### Color Tokens (HSL)

Defined in `src/index.css` using CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 346.8 77.2% 49.8%;
  --secondary: 240 4.8% 95.9%;
  --accent: 240 4.8% 95.9%;
  --muted: 240 4.8% 95.9%;
  /* ... */
}
```

### Typography

- **Font Family**: Nunito (Google Fonts)
- **Headings**: Bold, responsive sizing

### Animations

Custom Tailwind animations in `tailwind.config.ts`:

- `accordion-down` / `accordion-up`
- `scale-up`
- `heart-pop`

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript compiler options |
| `components.json` | shadcn/ui configuration |
| `eslint.config.js` | ESLint rules |

---

## 📱 Mobile Interactions

### Swipe Gestures

- **Swipe Right** → Vote "Hot" 🔥 (Pull)
- **Swipe Left** → Vote "Not" 👎 (Push)
- Visual feedback with color overlays
- Haptic vibration on action threshold

### Button Controls

- **Pull Button**: Green, votes for current model
- **Push Button**: Red, votes against current model

---

## 🧪 Development

### Code Style

- TypeScript strict mode enabled
- ESLint for code linting
- Tailwind CSS with semantic tokens
- Component-based architecture

### Adding New Models

1. Add image to `src/assets/` as `model{ID}.jpg`
2. Update the `models` array in `CatMemChex.tsx`:

```typescript
{ id: 221, name: "NewModel", image: model221, region: "region" },
```

### Adding New Regions

1. Add to `regions` array in `CatMemChex.tsx`
2. Assign new models to the region

---

## 🚢 Deployment

### Lovable Platform

The app is deployed on Lovable's platform:
- Preview: https://id-preview--49d91239-b9fe-458a-b5f4-6707b6bd92e5.lovable.app
- Production: https://lxix.lovable.app

### Self-Hosting

Build the project and deploy the `dist/` folder to any static hosting:

```bash
npm run build
# Deploy contents of dist/ folder
```

Compatible with: Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.

---

## 📄 License

This project is private and proprietary.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---
