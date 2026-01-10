import { useState, useEffect, useCallback, useMemo } from "react";
import { Heart, Flame, X, Trophy, Crown, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import cat1Image from "@/assets/cat1.jpg";
import cat2Image from "@/assets/cat2.jpg";

interface CatData {
  id: string;
  name: string;
  image: string;
  score: number;
}

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
}

const CatCard = ({ image, name, score, onHot, onNot, isAnimating, hearts }: CatCardProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Card */}
      <div className="relative overflow-visible rounded-3xl glass shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2">
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
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button
          variant="not"
          size="lg"
          onClick={onNot}
          className="rounded-full w-14 h-14 p-0"
        >
          <X className="w-6 h-6" />
        </Button>
        <Button
          variant="hot"
          size="lg"
          onClick={onHot}
          className="rounded-full w-14 h-14 p-0"
        >
          <Flame className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

interface LeaderboardProps {
  cats: CatData[];
}

const Leaderboard = ({ cats }: LeaderboardProps) => {
  const sortedCats = useMemo(() => 
    [...cats].sort((a, b) => b.score - a.score),
    [cats]
  );

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 0:
        return <Crown className="w-5 h-5 text-amber-500" />;
      case 1:
        return <Medal className="w-5 h-5 text-slate-400" />;
      default:
        return <Medal className="w-5 h-5 text-amber-700" />;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 0:
        return "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-200";
      case 1:
        return "bg-gradient-to-r from-slate-100 to-slate-50 border-slate-200";
      default:
        return "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100";
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md mx-auto mt-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="glass rounded-2xl p-6 shadow-card">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Trophy className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Leaderboard</h2>
        </div>
        
        <div className="space-y-3">
          {sortedCats.map((cat, index) => (
            <motion.div
              key={cat.id}
              className={`flex items-center gap-4 p-3 rounded-xl border ${getRankBg(index)} transition-all duration-300 hover:scale-[1.02]`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              layout
            >
              {/* Rank */}
              <div className="flex items-center justify-center w-8 h-8">
                {getRankIcon(index)}
              </div>
              
              {/* Cat Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-md">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Cat Info */}
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {index === 0 ? "👑 Top Cat!" : index === 1 ? "Almost there!" : "Keep voting!"}
                </p>
              </div>
              
              {/* Score */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <motion.span 
                  className="font-bold text-primary"
                  key={cat.score}
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {cat.score}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Total Votes */}
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Total votes: <span className="font-bold text-foreground">{sortedCats.reduce((sum, cat) => sum + cat.score, 0)}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CatMemChex = () => {
  const [scores, setScores] = useState<{ cat1: number; cat2: number }>(() => {
    const saved = localStorage.getItem("catmemchex-scores");
    return saved ? JSON.parse(saved) : { cat1: 0, cat2: 0 };
  });
  
  const [animating, setAnimating] = useState<{ cat1: boolean; cat2: boolean }>({
    cat1: false,
    cat2: false,
  });

  const [hearts, setHearts] = useState<{ cat1: FloatingHeart[]; cat2: FloatingHeart[] }>({
    cat1: [],
    cat2: [],
  });

  const [heartId, setHeartId] = useState(0);

  useEffect(() => {
    localStorage.setItem("catmemchex-scores", JSON.stringify(scores));
  }, [scores]);

  const spawnHearts = useCallback((cat: "cat1" | "cat2") => {
    const newHearts: FloatingHeart[] = Array.from({ length: 6 }, (_, i) => ({
      id: heartId + i,
      x: 20 + Math.random() * 60,
      y: 30 + Math.random() * 40,
      scale: 0.6 + Math.random() * 0.8,
      rotation: -30 + Math.random() * 60,
    }));

    setHeartId((prev) => prev + 6);
    setHearts((prev) => ({ ...prev, [cat]: [...prev[cat], ...newHearts] }));

    // Remove hearts after animation
    setTimeout(() => {
      setHearts((prev) => ({
        ...prev,
        [cat]: prev[cat].filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      }));
    }, 1500);
  }, [heartId]);

  const handleHot = (cat: "cat1" | "cat2") => {
    setScores((prev) => ({ ...prev, [cat]: prev[cat] + 1 }));
    setAnimating((prev) => ({ ...prev, [cat]: true }));
    spawnHearts(cat);
    setTimeout(() => setAnimating((prev) => ({ ...prev, [cat]: false })), 300);
  };

  const handleNot = (cat: "cat1" | "cat2") => {
    setAnimating((prev) => ({ ...prev, [cat]: true }));
    setTimeout(() => setAnimating((prev) => ({ ...prev, [cat]: false })), 300);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CatMemChex
          </h1>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
        </div>
        <p className="text-muted-foreground text-lg">Vote for your favorite furry friend!</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
          <CatCard
            image={cat1Image}
            name="Ginger"
            score={scores.cat1}
            onHot={() => handleHot("cat1")}
            onNot={() => handleNot("cat1")}
            isAnimating={animating.cat1}
            hearts={hearts.cat1}
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
            image={cat2Image}
            name="Shadow"
            score={scores.cat2}
            onHot={() => handleHot("cat2")}
            onNot={() => handleNot("cat2")}
            isAnimating={animating.cat2}
            hearts={hearts.cat2}
          />
        </div>

        {/* Leaderboard */}
        <Leaderboard 
          cats={[
            { id: "cat1", name: "Ginger", image: cat1Image, score: scores.cat1 },
            { id: "cat2", name: "Shadow", image: cat2Image, score: scores.cat2 },
          ]} 
        />
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Tap <Flame className="w-4 h-4 inline text-primary" /> for Hot • Tap <X className="w-4 h-4 inline text-muted-foreground" /> for Not
        </p>
      </footer>
    </div>
  );
};

export default CatMemChex;
