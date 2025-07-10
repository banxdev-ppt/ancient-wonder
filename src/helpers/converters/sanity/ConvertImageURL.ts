import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '~/helpers/converters/sanity/Client';
import type { IOptionImageURL } from '~/@types/global';

const builder = imageUrlBuilder(client);

export function convertImageURL(source: SanityImageSource, options?: IOptionImageURL): string {
  if (!source) return '';

  try {
    const image = builder.image(source);

    if (options) {
      return image
        .width(options.width ?? 0)
        .height(options.height ?? 0)
        .quality(options.quality || 80)
        .format(options.format || 'webp')
        .url();
    }

    return image.url();
  } catch (error) {
    return `Failed to Convert Image URL ${error}`;
  }
}
