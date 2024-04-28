"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Soal5Page() {
  // function getInput(message) {
  //   return prompt(message);
  // }

  // function createTransitionTable(states, keys) {
  //   const table = [];
  //   for (let i = 0; i < states.length; i++) {
  //     table[i] = [];
  //     for (let j = 0; j < keys.length; j++) {
  //       const nextState = getInput(
  //         `From state ${states[i]} if ${keys[j]} goes to:`
  //       );
  //       table[i][j] = nextState.split();
  //     }
  //   }
  //   return table;
  // }

  // function convert(currentStates, key, transitionTable) {
  //   const possibleStates = [];
  //   for (const state of currentStates) {
  //     const stateIndex = states.indexOf(state);
  //     const keyIndex = keys.indexOf(key);
  //     possibleStates.push(...transitionTable[stateIndex][keyIndex]);
  //   }
  //   return possibleStates;
  // }

  // function isAccepted(string, finalState, transitionTable) {
  //   let currentStates = [states[0]];
  //   for (const char of string) {
  //     currentStates = convert(currentStates, char, transitionTable);
  //   }
  //   return currentStates.some((state) => finalState.includes(state));
  // }

  // const states = [];
  // const numStates = parseInt(getInput("Enter the number of states: "));
  // for (let i = 0; i < numStates; i++) {
  //   states.push(getInput(`Enter state ${i + 1}: `));
  // }

  // const keys = [];
  // const numKeys = parseInt(getInput("Enter the number of keys: "));
  // for (let i = 0; i < numKeys; i++) {
  //   keys.push(getInput(`Enter key ${i + 1}: `));
  // }

  // const finalState = getInput("Enter the final state: ");

  // const transitionTable = createTransitionTable(states, keys);

  // while (true) {
  //   const string = getInput("Enter a string to check: ");
  //   const isStringAccepted = isAccepted(string, finalState, transitionTable);
  //   console.log(isStringAccepted ? "Ya" : "Tidak");

  //   const continueCheck = confirm("Check another string?");
  //   if (!continueCheck) {
  //     break;
  //   }
  // }

  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex flex-wrap flex-col justify-center mt-20 mx-10 ">
        <div className="flex flex-row gap-4 mb-7">
          <Button
            className="
            hover:bg-purple-100"
            variant="secondary"
          >
            Generate Random DFA
          </Button>
          <Button
            className="
            hover:bg-purple-100"
            variant="secondary"
          >
            Generate Random NFA
          </Button>
          <Button
            className="
            hover:bg-purple-100"
            variant="secondary"
          >
            Generate Random eNFA
          </Button>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="many_state">States (gunakan spasi)</Label>
          <Input id="many_state" placeholder="Banyak State" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-7">
          <Label htmlFor="alphabet">Alphabet (gunakan spasi)</Label>
          <Input id="alphabet" placeholder="Simbol" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-7">
          <Label htmlFor="initial_state">Initial State (hanya 1)</Label>
          <Input id="initial_state" placeholder="State Pertama" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-7">
          <Label htmlFor="final_state">Final State (gunakan spasi)</Label>
          <Input id="final_state" placeholder="State yang diterima" />
        </div>

        <div className="grid w-full max-w-md items-center gap-1.5 mt-7">
          <Label htmlFor="trantition">
            Transisi Table (format : stateA:symbol{`>`}stateB,stateC) <br></br>
            <br></br>
            Jika epsilon (gunakan $ karakter)
          </Label>
          <Textarea placeholder="Buat Transisi" id="trantition" />
        </div>
        <div className="grid w-full max-w-md mt-7">
          <Button
            className="bg-purple-500 text-white 
            hover:bg-purple-800"
            variant="secondary"
          >
            Make Graph
          </Button>
        </div>
      </main>
    </>
  );
}

export default Soal5Page;
