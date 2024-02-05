import { Await, Outlet, useLoaderData } from "react-router-dom";
import styles from "../Layout.module.css";
import { Suspense } from "react";
import { Program } from "../../../static/types";

export const Container = () => {
  const { data } = useLoaderData() as { data: Promise<Program[]> };
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Hello</div>}>
        <Await resolve={data}>
          <Outlet />
        </Await>
      </Suspense>
    </div>
  );
};
