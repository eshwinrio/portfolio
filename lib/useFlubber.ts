"use client";

import { interpolate } from "flubber";
import { MotionValue, useTransform } from "motion/react";

export const getIndex = (_: any, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
    return useTransform(progress, paths.map(getIndex), paths, {
        mixer: (a, b) => interpolate(a, b),
    });
}
