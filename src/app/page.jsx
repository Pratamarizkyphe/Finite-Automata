"use client";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";

const cardData = [
  {
    title: "Soal 1",
    description:
      "Menerima input untuk NFA ataupun e-NFA kemudian mengubahnya menjadi DFA yang berkaitan.",
  },
  {
    title: "Soal 2",
    description:
      "Menerima input berupa regular expression dan dapat mengenerate e-NFA yang berhubungan.",
  },
  {
    title: "Soal 3",
    description:
      "Menerima input berupa sebuah DFA kemudian membuat jadi minimal, dimana user dapat memasukkan input berupa string untuk mengetes DFA tesebut, baik sebelum maupun sesudah dalam bentuk minimal.",
  },
  {
    title: "Soal 4",
    description:
      "Menerima input berupa dua buah DFA, kemudian menunjukkan keduanya equivalen atau tidak.",
  },
  {
    title: "Soal 5",
    description:
      "Mengetes DFA, NFA, e-NFA ataupun reguler expression dengan memasukkan input berupa string untuk mengetahui apakah string tersebut di accept atau di reject.",
  },
];

export default function Home() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex flex-wrap justify-center mt-20 mx-10 ">
        {cardData.map((card) => (
          <Card
            key={card.title}
            className="w-[350px] m-2 flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription className="text-sm text-justify">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-row-reverse">
              <Link href={`/${card.title.replace(" ", "")}`}>
                <Button
                  variant="ghost"
                  className="hover:text-purple-800 hover:bg-purple-100"
                >
                  More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </main>
    </>
  );
}
