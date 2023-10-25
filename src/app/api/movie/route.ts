import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
export async function POST(req: Request) {
  const body = await req.json();
  const {
    title,
    synopsis,
    duration,
    releaseDate,
    ageRating,
    bannerImage,
    listImage,
    trailerLink,
  } = body;

  if (
    !title ||
    !synopsis ||
    !duration ||
    !releaseDate ||
    !ageRating ||
    !bannerImage ||
    !listImage ||
    !trailerLink
  ) {
    return NextResponse.json({ error: "Invalid input" });
  }

  const movie = await prisma.movie.create({
    data: {
      title,
      synopsis,
      duration,
      releaseDate,
      ageRating,
      bannerImage,
      listImage,
      trailerLink,
    },
  });

  return NextResponse.json(movie);
}

export async function GET() {
  const movies = await prisma.movie.findMany();

  if (!movies) {
    return NextResponse.json({ error: "No movies found" });
  }

  return NextResponse.json(movies);
}
