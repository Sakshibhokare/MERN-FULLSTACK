import { useMemo } from "react";
import { useState } from "react";

// In this assignment, you will create a component that renders a 
// large list of sentences and includes an input field for 
// filtering these items. 
// The goal is to use useMemo to optimize the filtering process, 
// ensuring the list is only re-calculated when necessary 
// (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to 
// pass more than one value in the dependency array

//generate random sentences 
const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    // eslint-disable-next-line no-unused-vars
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filterWord, setFilterWord] = useState(""); //it will store current value 

    //if the sentence include the filter word then we will keep else do not show
    const filteredSentences = useMemo(() => {
        return sentences.filter((x) => x.includes(filterWord))
    }, [sentences, filterWord])


    return <div>
        <input type="text" onChange={(e) => {
            setFilterWord(e.target.value)
        }}></input>
        {filteredSentences.map(
            // eslint-disable-next-line react/jsx-key
            word => <div>
                {word}
            </div>)
        }
    </div>
}