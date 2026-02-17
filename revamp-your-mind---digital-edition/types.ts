
// Import React to provide access to the React namespace for type definitions.
import React from 'react';

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  quote?: string;
  content: React.ReactNode;
}

export interface Part {
  title: string;
  subtitle: string;
  chapters: number[];
}

export enum NavigationSection {
  COVER = 'cover',
  TOC = 'toc',
  INTRO = 'intro',
  CHAPTER = 'chapter',
  EPILOGUE = 'epilogue',
  AUTHOR = 'author'
}
