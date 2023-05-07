/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    categories: Category;
    posts: Post;
    tags: Tag;
    users: User;
    media: Media;
    'form-submissions': FormSubmission;
    studies: Study;
  };
  globals: {
    menu: Menu;
  };
}
export interface Page {
  id: string;
  slug?: string;
  title: string;
  layout?: (
    | {
        content?: {
          [k: string]: unknown;
        }[];
        buttons: {
          label: string;
          type: 'page' | 'custom';
          page: string | Page;
          url: string;
          newTab: boolean;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        content: {
          [k: string]: unknown;
        }[];
        backgroundColor?: 'none' | 'primary' | 'secondary' | 'neutral';
        alignment?: 'left' | 'center' | 'right';
        width?: 'full' | 'half' | 'oneThird' | 'twoThirds';
        paddingTop?: 'small' | 'medium' | 'large';
        paddingBottom?: 'small' | 'medium' | 'large';
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        image: string | Media;
        type?: 'normal' | 'fullscreen' | 'wide';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'image';
      }
  )[];
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    card?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Category {
  id: string;
  name?: string;
}
export interface Post {
  id: string;
  slug?: string;
  title?: string;
  author?: string | User;
  publishedDate?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Tag {
  id: string;
  name?: string;
}
export interface FormSubmission {
  id: string;
  from?: string;
  message?: string;
  source?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Study {
  id: string;
  title?: string;
  client?: string;
  category?: string[] | Category[];
  image: string | Media;
  location?: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Menu {
  id: string;
  nav: {
    link: {
      type?: 'page' | 'url';
      label: string;
      page: string | Page;
      url?: string;
    };
    id?: string;
  }[];
}
