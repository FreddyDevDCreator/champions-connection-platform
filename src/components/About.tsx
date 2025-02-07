
import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Youtube } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-primary hover:text-secondary transition-colors duration-300">About WOGSA</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-display font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-gray-600">
              Bringing people to the knowledge of a glorious, overcoming, wealthy and spirit filled life in Christ.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-display font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600">
              To raise a generation of those who seek to do the will of God; advancing the kingdom of our father.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-display font-bold mb-4 text-primary">Our Desire</h3>
            <p className="text-gray-600">
              To bring believers to the knowledge of the finished work of Christ on the cross.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-16">
          <h3 className="text-2xl font-display font-bold mb-6 text-primary">Our History</h3>
          <div className={`prose max-w-none text-gray-600 ${isMobile && !isHistoryExpanded ? "max-h-[300px] overflow-hidden" : ""}`}>
            <p className="mb-4">
              It was a Thursday morning 13th of June, 2013, I was meditating and praying for directions about what God wanted to do with the work in my hands and how he wanted it done, suddenly I saw a revelation of a large big pot of porridge on a fire, the pot was filled with food and no one was getting from it, I saw a hand picked up a chick (a baby chicken) which was laying helplessly on the floor, it seemed very hungry and weak from starvation, the hand picked it and slammed a spoon of food on its face and dropped it, Immediately I had heard the voice of the Lord say to me that is how my children are suffering when all things belongs to them, then He said because of this I give you a liberating ministry go and liberate people and bring them into their desired fulness.
            </p>
            <p className="mb-4">
              Just while the vision was still unveiling I saw fire drop in front of me as I shut my eyes and it wrote Word of God, And he said The commission will be called WORD OF GOD MINISTRY.
            </p>
            <p className="mb-4">
              The Lord committed me to more growth, more prayers and more learning for years, in 2016 the name of the ministry was changed to WORD OF GOD AND SALVATION ARENA. The church was fully started commissioned and started on Sunday 1st of July, 2018.
            </p>
            <p>
              To the glory of God WOGSA has survived lots of threats and attacks from the devil trying to shut us down, but we prevailed. We know the Lord has sent us to pull down the kingdom of darkness and establish the kingdom of our God, and we are doing just that, building the kingdom of priest wealthy people and Kings unto our God, glory to God.
            </p>
          </div>
          {isMobile && (
            <button
              onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
              className="mt-4 flex items-center justify-center w-full text-primary hover:text-secondary transition-colors gap-2"
            >
              {isHistoryExpanded ? "Read Less" : "Read More"}
              <ChevronDown className={`transform transition-transform ${isHistoryExpanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-display font-bold mb-6 text-primary text-center">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/fredrick.abodunrin.5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-primary/5"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://www.instagram.com/fredrickabodunrin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-primary/5"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-primary/5"
            >
              <Youtube size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
