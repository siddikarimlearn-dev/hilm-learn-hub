import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Calculator, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { generate } from "random-words";

const Test = () => {
  const [points, setPoints] = useState(0);
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [mathInput, setMathInput] = useState("");
  const [wordQuestion, setWordQuestion] = useState({ correct: "", wrong: "", options: [] as string[] });
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {
    const savedPoints = localStorage.getItem("testPoints");
    if (savedPoints) {
      setPoints(parseInt(savedPoints));
    }
    generateMathQuestion();
    generateWordQuestion();
  }, []);

  useEffect(() => {
    localStorage.setItem("testPoints", points.toString());
    window.dispatchEvent(new Event("storage"));
  }, [points]);

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    setMathQuestion({ num1, num2, answer: num1 + num2 });
    setMathInput("");
  };

  const generateWordQuestion = () => {
    const words = generate({ exactly: 4, maxLength: 8 }) as string[];
    const correctWord = words[Math.floor(Math.random() * words.length)];
    const wrongWord = correctWord.split("").sort(() => Math.random() - 0.5).join("");
    
    const options = words.map(w => 
      w === correctWord ? wrongWord : w
    ).sort(() => Math.random() - 0.5);
    
    setWordQuestion({ correct: correctWord, wrong: wrongWord, options });
    setSelectedWord("");
  };

  const handleMathSubmit = () => {
    if (parseInt(mathInput) === mathQuestion.answer) {
      setPoints(prev => prev + 10);
      toast.success("Correct! +10 points");
      generateMathQuestion();
    } else {
      toast.error("Wrong answer! Try again");
      setMathInput("");
    }
  };

  const handleWordSubmit = (word: string) => {
    setSelectedWord(word);
    if (word === wordQuestion.correct) {
      setPoints(prev => prev + 10);
      toast.success("Correct! +10 points");
      setTimeout(() => generateWordQuestion(), 1000);
    } else {
      toast.error("Wrong answer! Try again");
    }
  };

  const resetPoints = () => {
    setPoints(0);
    localStorage.setItem("testPoints", "0");
    window.dispatchEvent(new Event("storage"));
    toast.info("Points reset to 0");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-12">
      <div className="container mx-auto px-4">
        {/* Header with Points */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl shadow-lg mb-4">
            <Trophy className="h-8 w-8" />
            <div>
              <p className="text-sm opacity-90">Total Points</p>
              <p className="text-4xl font-bold">{points}</p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Test Your Skills
          </h1>
          <p className="text-muted-foreground">Complete challenges and earn points!</p>
          <Button onClick={resetPoints} variant="outline" size="sm" className="mt-4">
            Reset Points
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Math Game */}
          <Card className="animate-fade-in-up hover-scale border-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                <CardTitle>Math Challenge</CardTitle>
              </div>
              <CardDescription>Solve the calculation to earn 10 points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg text-center">
                <p className="text-5xl font-bold text-foreground mb-4">
                  {mathQuestion.num1} + {mathQuestion.num2} = ?
                </p>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={mathInput}
                    onChange={(e) => setMathInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleMathSubmit()}
                    placeholder="Your answer"
                    className="text-center text-2xl h-14"
                  />
                  <Button onClick={handleMathSubmit} size="lg" className="px-8">
                    Submit
                  </Button>
                </div>
              </div>
              <Button onClick={generateMathQuestion} variant="outline" className="w-full">
                Skip Question
              </Button>
            </CardContent>
          </Card>

          {/* Word Game */}
          <Card className="animate-fade-in-up hover-scale border-2" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-secondary" />
                <CardTitle>Word Challenge</CardTitle>
              </div>
              <CardDescription>Find the correct spelling to earn 10 points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-6 rounded-lg">
                <p className="text-center text-lg mb-4 text-muted-foreground">
                  Which word is spelled correctly?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {wordQuestion.options.map((word, idx) => (
                    <Button
                      key={idx}
                      onClick={() => handleWordSubmit(word)}
                      variant={selectedWord === word ? (word === wordQuestion.correct ? "default" : "destructive") : "outline"}
                      className="h-16 text-lg"
                      disabled={selectedWord !== ""}
                    >
                      {word}
                    </Button>
                  ))}
                </div>
              </div>
              <Button onClick={generateWordQuestion} variant="outline" className="w-full">
                Skip Question
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="max-w-2xl mx-auto mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle>How to Play</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>• Each correct answer earns you <strong>10 points</strong></p>
            <p>• Your points are saved automatically</p>
            <p>• Math Challenge: Solve simple addition problems</p>
            <p>• Word Challenge: Find the correctly spelled word from scrambled options</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Test;
