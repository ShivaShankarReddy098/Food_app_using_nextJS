import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import React, { Suspense } from "react";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "../loading";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.h1tag}>
          Delicious meals,created{""}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p className={classes.para}>
          Choose your favorite recipe and cook it yourself.it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
