import { useState, useEffect, useCallback, useRef } from "react";
import { Heart, Flame, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import model1Image from "@/assets/model1.jpg";
import model2Image from "@/assets/model2.jpg";
import model3Image from "@/assets/model3.jpg";
import model4Image from "@/assets/model4.jpg";
import model5Image from "@/assets/model5.jpg";
import model6Image from "@/assets/model6.jpg";
import model7Image from "@/assets/model7.jpg";
import model8Image from "@/assets/model8.jpg";
import model9Image from "@/assets/model9.jpg";
import model10Image from "@/assets/model10.jpg";
import model11Image from "@/assets/model11.jpg";
import model12Image from "@/assets/model12.jpg";
import model13Image from "@/assets/model13.jpg";
import model14Image from "@/assets/model14.jpg";
import model15Image from "@/assets/model15.jpg";
import model16Image from "@/assets/model16.jpg";
import model17Image from "@/assets/model17.jpg";
import model18Image from "@/assets/model18.jpg";
import model19Image from "@/assets/model19.jpg";
import model20Image from "@/assets/model20.jpg";
import model21Image from "@/assets/model21.jpg";
import model22Image from "@/assets/model22.jpg";
import model23Image from "@/assets/model23.jpg";
import model24Image from "@/assets/model24.jpg";
import model25Image from "@/assets/model25.jpg";
import model26Image from "@/assets/model26.jpg";
import model27Image from "@/assets/model27.jpg";
import model28Image from "@/assets/model28.jpg";
import model29Image from "@/assets/model29.jpg";
import model30Image from "@/assets/model30.jpg";
import model31Image from "@/assets/model31.jpg";
import model32Image from "@/assets/model32.jpg";
import model33Image from "@/assets/model33.jpg";
import model34Image from "@/assets/model34.jpg";
import model35Image from "@/assets/model35.jpg";
import model36Image from "@/assets/model36.jpg";
import model37Image from "@/assets/model37.jpg";
import model38Image from "@/assets/model38.jpg";
import model39Image from "@/assets/model39.jpg";
import model40Image from "@/assets/model40.jpg";
import model41Image from "@/assets/model41.jpg";
import model42Image from "@/assets/model42.jpg";
import model43Image from "@/assets/model43.jpg";
import model44Image from "@/assets/model44.jpg";
import model45Image from "@/assets/model45.jpg";
import model46Image from "@/assets/model46.jpg";
import model47Image from "@/assets/model47.jpg";
import model48Image from "@/assets/model48.jpg";
import model49Image from "@/assets/model49.jpg";
import model50Image from "@/assets/model50.jpg";
import model51Image from "@/assets/model51.jpg";

import model53Image from "@/assets/model53.jpg";
import model54Image from "@/assets/model54.jpg";
import model55Image from "@/assets/model55.jpg";
import model56Image from "@/assets/model56.jpg";
import model57Image from "@/assets/model57.jpg";
import model58Image from "@/assets/model58.jpg";
import model59Image from "@/assets/model59.jpg";
import model60Image from "@/assets/model60.jpg";
import model61Image from "@/assets/model61.jpg";
import model62Image from "@/assets/model62.jpg";
import model63Image from "@/assets/model63.jpg";
import model64Image from "@/assets/model64.jpg";
import model65Image from "@/assets/model65.jpg";
import model66Image from "@/assets/model66.jpg";
import model67Image from "@/assets/model67.jpg";
import model68Image from "@/assets/model68.jpg";
import model69Image from "@/assets/model69.jpg";
import model70Image from "@/assets/model70.jpg";

// Model data - diverse portrait pool
const models = [
  { id: 1, name: "Ava", image: model1Image },
  { id: 2, name: "Mei", image: model2Image },
  { id: 3, name: "Sofia", image: model3Image },
  { id: 4, name: "Emma", image: model4Image },
  { id: 5, name: "Layla", image: model5Image },
  { id: 6, name: "Priya", image: model6Image },
  { id: 7, name: "Ruby", image: model7Image },
  { id: 8, name: "Amara", image: model8Image },
  { id: 9, name: "Luna", image: model9Image },
  { id: 10, name: "Yuki", image: model10Image },
  { id: 11, name: "Hana", image: model11Image },
  { id: 12, name: "Zara", image: model12Image },
  { id: 13, name: "Giulia", image: model13Image },
  { id: 14, name: "Natasha", image: model14Image },
  { id: 15, name: "Maria", image: model15Image },
  { id: 16, name: "Astrid", image: model16Image },
  { id: 17, name: "Suki", image: model17Image },
  { id: 18, name: "Adaeze", image: model18Image },
  { id: 19, name: "Valentina", image: model19Image },
  { id: 20, name: "Sienna", image: model20Image },
  { id: 21, name: "Ximena", image: model21Image },
  { id: 22, name: "Camila", image: model22Image },
  { id: 23, name: "Isabella", image: model23Image },
  { id: 24, name: "Daniela", image: model24Image },
  { id: 25, name: "Alejandra", image: model25Image },
  { id: 26, name: "Yasmín", image: model26Image },
  { id: 27, name: "Luciana", image: model27Image },
  { id: 28, name: "Catalina", image: model28Image },
  { id: 29, name: "Mariana", image: model29Image },
  { id: 30, name: "Carolina", image: model30Image },
  { id: 31, name: "Althea", image: model31Image },
  { id: 32, name: "Jasmine", image: model32Image },
  { id: 33, name: "Bea", image: model33Image },
  { id: 34, name: "Katrina", image: model34Image },
  { id: 35, name: "Angel", image: model35Image },
  { id: 36, name: "Liza", image: model36Image },
  { id: 37, name: "Nadine", image: model37Image },
  { id: 38, name: "Julia", image: model38Image },
  { id: 39, name: "Maja", image: model39Image },
  { id: 40, name: "Kim", image: model40Image },
  // Colombia
  { id: 41, name: "Sofía", image: model41Image },
  { id: 42, name: "Manuela", image: model42Image },
  { id: 43, name: "Natalia", image: model43Image },
  { id: 44, name: "Gabriela", image: model44Image },
  { id: 45, name: "Paula", image: model45Image },
  { id: 46, name: "Andrea", image: model46Image },
  { id: 47, name: "Juliana", image: model47Image },
  { id: 48, name: "Sara", image: model48Image },
  { id: 49, name: "Laura", image: model49Image },
  { id: 50, name: "Diana", image: model50Image },
  // Venezuela
  { id: 51, name: "Adriana", image: model51Image },
  
  { id: 53, name: "Génesis", image: model53Image },
  { id: 54, name: "Mariángel", image: model54Image },
  { id: 55, name: "Oriana", image: model55Image },
  { id: 56, name: "Mariela", image: model56Image },
  { id: 57, name: "Yuliana", image: model57Image },
  { id: 58, name: "Antonella", image: model58Image },
  { id: 59, name: "Fabiana", image: model59Image },
  { id: 60, name: "Stefanía", image: model60Image },
  // Slavic countries
  { id: 61, name: "Anastasia", image: model61Image },
  { id: 62, name: "Oksana", image: model62Image },
  { id: 63, name: "Kinga", image: model63Image },
  { id: 64, name: "Petra", image: model64Image },
  { id: 65, name: "Milica", image: model65Image },
  { id: 66, name: "Darya", image: model66Image },
  { id: 67, name: "Ivana", image: model67Image },
  { id: 68, name: "Zuzana", image: model68Image },
  { id: 69, name: "Elena", image: model69Image },
  { id: 70, name: "Maja", image: model70Image },
];

// Sound effect utilities using Web Audio API
const createAudioContext = () => {
  return new (window.AudioContext || (window as any).webkitAudioContext)();
};

const playHotSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const notes = [440, 554, 659, 880];
  
  notes.forEach((freq, i) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    filter.type = "lowpass";
    filter.frequency.value = 2000;
    
    osc.type = "sine";
    osc.frequency.value = freq;
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    
    const startTime = now + i * 0.08;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
    
    osc.start(startTime);
    osc.stop(startTime + 0.5);
  });
  
  const shimmer = audioContext.createOscillator();
  const shimmerGain = audioContext.createGain();
  shimmer.type = "triangle";
  shimmer.frequency.value = 1760;
  shimmer.connect(shimmerGain);
  shimmerGain.connect(audioContext.destination);
  shimmerGain.gain.setValueAtTime(0, now + 0.2);
  shimmerGain.gain.linearRampToValueAtTime(0.08, now + 0.3);
  shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
  shimmer.start(now + 0.2);
  shimmer.stop(now + 1);
};

const playNotSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  
  osc.type = "sine";
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.exponentialRampToValueAtTime(150, now + 0.3);
  
  osc.connect(gain);
  gain.connect(audioContext.destination);
  
  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
  
  osc.start(now);
  osc.stop(now + 0.4);
};

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface CatCardProps {
  image: string;
  name: string;
  score: number;
  onHot: () => void;
  onNot: () => void;
  isAnimating: boolean;
  hearts: FloatingHeart[];
  isExiting: boolean;
  exitDirection: "left" | "right" | null;
}

const CatCard = ({ image, name, score, onHot, onNot, isAnimating, hearts, isExiting, exitDirection }: CatCardProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`${name}-${image}`}
          className="relative overflow-visible rounded-3xl glass shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2"
          initial={{ opacity: 0, scale: 0.8, x: 0 }}
          animate={{ 
            opacity: isExiting ? 0 : 1, 
            scale: isExiting ? 0.8 : 1,
            x: isExiting ? (exitDirection === "right" ? 200 : -200) : 0,
            rotate: isExiting ? (exitDirection === "right" ? 15 : -15) : 0,
          }}
          exit={{ opacity: 0, scale: 0.8, x: exitDirection === "right" ? 200 : -200 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Image Container */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-3xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Score Badge */}
            <motion.div 
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass shadow-lg"
              animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="font-bold text-foreground">{score}</span>
            </motion.div>
            
            {/* Name */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{name}</h3>
            </div>
          </div>
          
          {/* Floating Hearts */}
          <AnimatePresence>
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute pointer-events-none"
                style={{ 
                  left: `${heart.x}%`, 
                  top: `${heart.y}%`,
                }}
                initial={{ 
                  opacity: 1, 
                  scale: 0, 
                  y: 0,
                  rotate: 0,
                }}
                animate={{ 
                  opacity: [1, 1, 0], 
                  scale: [0, heart.scale, heart.scale * 0.8],
                  y: -150,
                  rotate: heart.rotation,
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeOut",
                }}
              >
                <Heart 
                  className="w-8 h-8 text-primary fill-primary drop-shadow-lg" 
                  style={{ filter: 'drop-shadow(0 0 8px hsl(340, 82%, 62%))' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button
          variant="not"
          size="lg"
          onClick={onNot}
          className="rounded-full w-14 h-14 p-0"
          disabled={isExiting}
        >
          <X className="w-6 h-6" />
        </Button>
        <Button
          variant="hot"
          size="lg"
          onClick={onHot}
          className="rounded-full w-14 h-14 p-0"
          disabled={isExiting}
        >
          <Flame className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

const CatMemChex = () => {
  const [currentModels, setCurrentModels] = useState<{ card1: number; card2: number }>({
    card1: 0,
    card2: 1,
  });

  const [scores, setScores] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("catmemchex-scores-v2");
    return saved ? JSON.parse(saved) : {};
  });
  
  const [animating, setAnimating] = useState<{ card1: boolean; card2: boolean }>({
    card1: false,
    card2: false,
  });

  const [exiting, setExiting] = useState<{ card1: boolean; card2: boolean }>({
    card1: false,
    card2: false,
  });

  const [exitDirection, setExitDirection] = useState<{ card1: "left" | "right" | null; card2: "left" | "right" | null }>({
    card1: null,
    card2: null,
  });

  const [hearts, setHearts] = useState<{ card1: FloatingHeart[]; card2: FloatingHeart[] }>({
    card1: [],
    card2: [],
  });

  const [heartId, setHeartId] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = createAudioContext();
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  useEffect(() => {
    localStorage.setItem("catmemchex-scores-v2", JSON.stringify(scores));
  }, [scores]);

  const getNextModelIndex = (currentIndex: number, otherCardIndex: number) => {
    let nextIndex = (currentIndex + 1) % models.length;
    // Avoid showing the same model on both cards
    if (nextIndex === otherCardIndex) {
      nextIndex = (nextIndex + 1) % models.length;
    }
    return nextIndex;
  };

  const spawnHearts = useCallback((card: "card1" | "card2") => {
    const newHearts: FloatingHeart[] = Array.from({ length: 6 }, (_, i) => ({
      id: heartId + i,
      x: 20 + Math.random() * 60,
      y: 30 + Math.random() * 40,
      scale: 0.6 + Math.random() * 0.8,
      rotation: -30 + Math.random() * 60,
    }));

    setHeartId((prev) => prev + 6);
    setHearts((prev) => ({ ...prev, [card]: [...prev[card], ...newHearts] }));

    setTimeout(() => {
      setHearts((prev) => ({
        ...prev,
        [card]: prev[card].filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      }));
    }, 1500);
  }, [heartId]);

  const transitionToNextCard = (card: "card1" | "card2", direction: "left" | "right") => {
    setExiting((prev) => ({ ...prev, [card]: true }));
    setExitDirection((prev) => ({ ...prev, [card]: direction }));

    setTimeout(() => {
      const otherCard = card === "card1" ? "card2" : "card1";
      setCurrentModels((prev) => ({
        ...prev,
        [card]: getNextModelIndex(prev[card], prev[otherCard]),
      }));
      setExiting((prev) => ({ ...prev, [card]: false }));
      setExitDirection((prev) => ({ ...prev, [card]: null }));
    }, 500);
  };

  const handleHot = (card: "card1" | "card2") => {
    const modelId = models[currentModels[card]].id;
    setScores((prev) => ({ ...prev, [modelId]: (prev[modelId] || 0) + 1 }));
    setAnimating((prev) => ({ ...prev, [card]: true }));
    spawnHearts(card);
    playHotSound(getAudioContext());
    
    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [card]: false }));
      transitionToNextCard(card, "right");
    }, 600);
  };

  const handleNot = (card: "card1" | "card2") => {
    setAnimating((prev) => ({ ...prev, [card]: true }));
    playNotSound(getAudioContext());
    
    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [card]: false }));
      transitionToNextCard(card, "left");
    }, 400);
  };

  const card1Model = models[currentModels.card1];
  const card2Model = models[currentModels.card2];

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2 relative">
          {/* Sparkle particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${10 + (i % 6) * 15}%`,
                top: `${i < 6 ? -10 : 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none"
                className="drop-shadow-lg"
              >
                <path 
                  d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" 
                  fill={`hsl(${(i * 60) % 360}, 100%, 70%)`}
                />
              </svg>
            </motion.div>
          ))}
          
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground text-xs font-bold">
              6
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold splash-title">
            ReliabilityTest
          </h1>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground text-xs font-bold">
              9
            </span>
          </motion.div>
        </div>
        <p className="text-muted-foreground text-lg">Vote for your favorite models</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
          <CatCard
            image={card1Model.image}
            name={card1Model.name}
            score={scores[card1Model.id] || 0}
            onHot={() => handleHot("card1")}
            onNot={() => handleNot("card1")}
            isAnimating={animating.card1}
            hearts={hearts.card1}
            isExiting={exiting.card1}
            exitDirection={exitDirection.card1}
          />
          
          {/* VS Badge */}
          <motion.div 
            className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full gradient-primary shadow-glow"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xl font-extrabold text-white">VS</span>
          </motion.div>
          
          <CatCard
            image={card2Model.image}
            name={card2Model.name}
            score={scores[card2Model.id] || 0}
            onHot={() => handleHot("card2")}
            onNot={() => handleNot("card2")}
            isAnimating={animating.card2}
            hearts={hearts.card2}
            isExiting={exiting.card2}
            exitDirection={exitDirection.card2}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Tap <Flame className="w-4 h-4 inline text-primary" /> for Pull • Tap <X className="w-4 h-4 inline text-muted-foreground" /> for Push
        </p>
      </footer>
    </div>
  );
};

export default CatMemChex;
