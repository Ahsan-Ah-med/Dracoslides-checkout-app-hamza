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
  const { benifit_title_1, Benifit_subtitle_1, Benifit_img_1 } = useSettings();
  const { benifit_title_2, Benifit_subtitle_2, Benifit_img_2 } = useSettings();
  const { benifit_title_3, Benifit_subtitle_3, Benifit_img_3 } = useSettings();
  const { benifit_title_4, Benifit_subtitle_4, Benifit_img_4 } = useSettings();
  const { heading_text } = useSettings();
  const { padding_block, padding_main, title_color, title_size, subtitle_size, subtitle_color } = useSettings();
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <>
      <Heading id='heading' inlineAlignment='center' level={2}>{heading_text}</Heading>
      <BlockLayout
        // @ts-ignore
        padding={padding_main}
        spacing={'tight'}
        blockAlignment={'start'}
        overflow={'hidden'}
        inlineAlignment={'center'}
        id='container'
      >
        <Grid
          columns={['10%', '100%']}
          spacing={'none'}
          rows={'fill'}
          blockAlignment={'start'}
        >
          <Image
            // @ts-ignore
            source={Benifit_img_1} fit={'cover'} />
          <BlockStack
            // @ts-ignore
            padding={padding_block} spacing={padding_block}>
            <Text
              // @ts-ignore
              size={title_size} emphasis='bold' appearance={title_color} >{benifit_title_1}</Text>
            <Text
              // @ts-ignore
              size={subtitle_size} appearance={subtitle_color} emphasis={'bold'}>{Benifit_subtitle_1}</Text>
          </BlockStack>
        </Grid>
        <Grid
          columns={['10%', '100%']}
          spacing={"none"}
          blockAlignment={'start'}
        >
          <Image
            // @ts-ignore
            source={Benifit_img_2} fit={'cover'} />
          <BlockStack
            // @ts-ignore
            padding={padding_block} spacing={padding_block}>
            <Text
              // @ts-ignore
              size={title_size} emphasis='bold' appearance={title_color}>{benifit_title_2}</Text>
            <Text
              // @ts-ignore
              size={subtitle_size} appearance={subtitle_color} emphasis={'bold'}>{Benifit_subtitle_2}</Text>
          </BlockStack>
        </Grid>

        <Grid
          columns={['10%', '100%']}
          spacing={"none"}
          blockAlignment={'start'}
        >
          <Image
            // @ts-ignore
            source={Benifit_img_3} fit={'cover'} />
          <BlockStack
            // @ts-ignore
            padding={padding_block} spacing={padding_block}>
            <Text
              // @ts-ignore
              size={title_size} emphasis='bold' appearance={title_color} >{benifit_title_3}</Text>
            <Text
              // @ts-ignore
              size={subtitle_size} appearance={subtitle_color} emphasis={'bold'}>{Benifit_subtitle_3}</Text>
          </BlockStack>
        </Grid>

        <Grid

          columns={['10%', '100%']}
          spacing={"none"}
          blockAlignment={'start'}
        >
          <Image
            // @ts-ignore
            source={Benifit_img_4} fit={'cover'} />
          <BlockStack
            // @ts-ignore
            padding={padding_block} spacing={padding_block}>
            <Text
              // @ts-ignore
              size={title_size} emphasis='bold' appearance={title_color} >{benifit_title_4}</Text>
            <Text
              // @ts-ignore
              size={subtitle_size} appearance={subtitle_color} emphasis={'bold'}>{Benifit_subtitle_4}</Text>
          </BlockStack>
        </Grid>

      </BlockLayout>
    </>
  );
}