import {
  useApi,
  useTranslate,
  reactExtension,
  BlockLayout,
  useSettings,
  Grid,
  Image,
  BlockStack,
  Text,
  Heading,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const { heading_text, heading_block, star_img } = useSettings();
  const { review_1, review_2, review_3 } = useSettings();
  const { review_1_author, review_2_author, review_3_author } = useSettings();
  const { review_size, review_color, author_color, author_size } = useSettings();

  return (
    <>
      <Grid padding={'base'}>
        <Heading level={2} inlineAlignment='start'>{heading_text} <Text size='small'>{heading_block}</Text></Heading>
      </Grid>
      <BlockLayout border={['base', 'none', 'none', 'none']}
        padding={'none'}
        spacing={'tight'}
        cornerRadius={'none'}
        overflow={'hidden'}
        inlineAlignment={'center'}
      >


        <Grid padding={['base', 'none', 'none', 'none']} spacing={'none'} rows={['fill', '80%']}>
          <Grid columns={['5%', '5%', "5%", "5%", "5%"]}
            spacing={"small500"}
            blockAlignment={'center'}
            padding={['none', 'none', 'small500', 'none']}>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
          </Grid>
          <Grid padding={'none'} spacing={'none'}>
            <Text
              // @ts-ignore
              size={review_size} appearance={review_color}>{review_1}<Text size={author_size} appearance={author_color} emphasis={'bold'}>{review_1_author}</Text></Text>
          </Grid>
        </Grid>
        <Grid padding={['base', 'none', 'none', 'none']} spacing={'none'} rows={['fill', '80%']}>
          <Grid columns={['5%', '5%', "5%", "5%", "5%"]}
            spacing={"small500"}
            blockAlignment={'center'}
            padding={['none', 'none', 'small500', 'none']}>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
          </Grid>
          <Grid>
            <Text
              // @ts-ignore
              size={review_size} appearance={review_color}>{review_2} <Text size={author_size} appearance={author_color} emphasis={'bold'}>{review_2_author}</Text></Text>
          </Grid>
        </Grid>
        <Grid padding={['base', 'none', 'none', 'none']} spacing={'none'} rows={['fill', '80%']}>
          <Grid columns={['5%', '5%', "5%", "5%", "5%"]}
            spacing={"small500"}
            blockAlignment={'center'}
            padding={['none', 'none', 'small500', 'none']}>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
            <BlockStack>
              <Image
                // @ts-ignore
                source={star_img} fit={'contain'} />
            </BlockStack>
          </Grid>
          <Grid>
            <Text
              // @ts-ignore
              size={review_size} appearance={review_color}>{review_3}<Text size={author_size} appearance={author_color} emphasis={'bold'}>{review_3_author}</Text></Text>
          </Grid>
        </Grid>

      </BlockLayout>
    </>
  );
}