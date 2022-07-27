import { NextPage } from "next";
import Head from "next/head";

import Carousel from "../components/carousel";
import FullImage from "../components/full-image";
import HorizontalGallery from "../components/horizontal-gallery";
import LargeGallery from "../components/large-gallery";
import PageRoot from "../components/page-root";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";
import SmallGallery from "../components/small-gallery";
import Subtitle from "../components/subtitle";
import TextImage from "../components/text-image";
import Title from "../components/title";
import TopDisplay from "../components/top-display";
import Animation from "../utils/animation";
import GalleryItem from "../utils/gallery-item";
import { GalleryRow, GalleryRowConfig } from "../utils/gallery-row";
import ProjectDescription from "../utils/project-description";

import BagMaking1 from "../images/lyu/bag-making-1-small.webp";
import BagMaking2 from "../images/lyu/bag-making-2-small.webp";
import BagMaking3 from "../images/lyu/bag-making-3-small.webp";
import BagMaking4 from "../images/lyu/bag-making-4-small.webp";
import BagMaking5 from "../images/lyu/bag-making-5-small.webp";
import BagMaking6 from "../images/lyu/bag-making-6-small.webp";
import BagMaking7 from "../images/lyu/bag-making-7-small.webp";
import BagMaking8 from "../images/lyu/bag-making-8-small.webp";
import BagMaking9 from "../images/lyu/bag-making-9-small.webp";
import DisplayImage from "../images/lyu/display-full.webp";
import Ease1 from "../images/lyu/ease-1-half.webp";
import Ease2 from "../images/lyu/ease-2-half.webp";
import Ease3 from "../images/lyu/ease-3-half.webp";
import Gallery11 from "../images/lyu/gallery/gallery-1-1-half.webp";
import Gallery12 from "../images/lyu/gallery/gallery-1-2-half.webp";
import Gallery13 from "../images/lyu/gallery/gallery-1-3-half.webp";
import Gallery21 from "../images/lyu/gallery/gallery-2-1-half.webp";
import Gallery22 from "../images/lyu/gallery/gallery-2-2-half.webp";
import Gallery23 from "../images/lyu/gallery/gallery-2-3-half.webp";
import Gallery31 from "../images/lyu/gallery/gallery-3-1-big.webp";
import Gallery32 from "../images/lyu/gallery/gallery-3-2-big.webp";
import Gallery41 from "../images/lyu/gallery/gallery-4-1-half.webp";
import Gallery42 from "../images/lyu/gallery/gallery-4-2-half.webp";
import Gallery43 from "../images/lyu/gallery/gallery-4-3-half.webp";
import Gallery51 from "../images/lyu/gallery/gallery-5-1-half.webp";
import Gallery52 from "../images/lyu/gallery/gallery-5-2-half.webp";
import Gallery53 from "../images/lyu/gallery/gallery-5-3-half.webp";
import Gallery61 from "../images/lyu/gallery/gallery-6-1-big.webp";
import Gallery62 from "../images/lyu/gallery/gallery-6-2-big.webp";
import Gallery63 from "../images/lyu/gallery/gallery-6-3-big.webp";
import Gallery71 from "../images/lyu/gallery/gallery-7-1-half.webp";
import Gallery72 from "../images/lyu/gallery/gallery-7-2-half.webp";
import Gallery73 from "../images/lyu/gallery/gallery-7-3-half.webp";
import Gallery81 from "../images/lyu/gallery/gallery-8-1-half.webp";
import Gallery82 from "../images/lyu/gallery/gallery-8-2-half.webp";
import Gallery83 from "../images/lyu/gallery/gallery-8-3-half.webp";
import IdeationSlipper from "../images/lyu/ideation-slipper-full.webp";
import IdeationTote from "../images/lyu/ideation-tote-full.webp";
import ManifestoImage from "../images/lyu/manifesto-half.webp";
import SlipperMaking1 from "../images/lyu/slipper-making-1-small.webp";
import SlipperMaking2 from "../images/lyu/slipper-making-2-small.webp";
import SlipperMaking3 from "../images/lyu/slipper-making-3-small.webp";
import SlipperMaking4 from "../images/lyu/slipper-making-4-small.webp";
import SlipperMaking5 from "../images/lyu/slipper-making-5-small.webp";
import SlipperMaking6 from "../images/lyu/slipper-making-6-small.webp";
import SlipperMaking7 from "../images/lyu/slipper-making-7-small.webp";
import SlipperMaking8 from "../images/lyu/slipper-making-8-small.webp";
import SlipperMaking9 from "../images/lyu/slipper-making-9-small.webp";
import SlipperMaking10 from "../images/lyu/slipper-making-10-small.webp";
import SlipperMaking11 from "../images/lyu/slipper-making-11-small.webp";
import SlipperMaking12 from "../images/lyu/slipper-making-12-small.webp";
import SlipperMaking13 from "../images/lyu/slipper-making-13-small.webp";
import SlipperMaking14 from "../images/lyu/slipper-making-14-small.webp";
import SlipperMaking15 from "../images/lyu/slipper-making-15-small.webp";
import Stylish1 from "../images/lyu/stylish-1-half.webp";
import Stylish2 from "../images/lyu/stylish-2-half.webp";
import Stylish3 from "../images/lyu/stylish-3-half.webp";
import TechPack1 from "../images/lyu/tech-pack-1-full.webp";
import TechPack2 from "../images/lyu/tech-pack-2-full.webp";
import TechPack3 from "../images/lyu/tech-pack-3-full.webp";
import TechPack4 from "../images/lyu/tech-pack-4-full.webp";
import TechPack5 from "../images/lyu/tech-pack-5-full.webp";
import TechPack6 from "../images/lyu/tech-pack-6-full.webp";
import TechPack7 from "../images/lyu/tech-pack-7-full.webp";

const Lyu: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lyu | Shirley Lyu Portfolio</title>
      </Head>

      <PageRoot>
        <Sidebar route="lyu" />
        <Scroller bgColor="bg-[#EFF2F3]">
          <TopDisplay
            image={DisplayImage}
            description={
              new ProjectDescription(
                "Lyu",
                "2 Weeks Daily",
                "Soft Goods",
                "Craft, Tech Drawing, Manufacture",
                "2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.",
              )
            }
            titleColor="text-gray-100"
          />

          {/* Manifesto */}
          <TextImage
            title="Project Manifesto"
            content={[
              "Design and handmade a leather tote bag and a pair of leather footwear that match my personal style.",
            ]}
            image={ManifestoImage}
            width={4684}
            height={5625}
          />

          {/* Personal Style */}
          <Title title="What is My Personal Style?" />
          <Subtitle subtitle="Stylish" />
          <HorizontalGallery
            items={[
              new GalleryItem(Stylish1),
              new GalleryItem(Stylish2),
              new GalleryItem(Stylish3),
            ]}
            sparse={false}
            botSpacing={false}
            width={736}
            height={900}
          />
          <Subtitle subtitle="Neutral and Ease" />
          <HorizontalGallery
            items={[
              new GalleryItem(Ease1),
              new GalleryItem(Ease2),
              new GalleryItem(Ease3),
            ]}
            width={736}
            height={900}
          />

          {/* Ideation */}
          <Title title="Ideation - Tote" />
          <FullImage
            image={IdeationTote}
            alt="Ideation for the tote"
            width={2400}
            height={1053}
          />
          <Title title="Ideation - Slippers" />
          <FullImage
            image={IdeationSlipper}
            alt="Ideation for the slippers"
            width={5047}
            height={2242}
          />

          {/* Tote bag making process */}
          <Title title="Tote Bag Making Process" />
          <SmallGallery
            items={[
              new GalleryItem(BagMaking1, "Cutting Template"),
              new GalleryItem(BagMaking2, "Material Cutting"),
              new GalleryItem(BagMaking3, "Buckle Selection"),
              new GalleryItem(BagMaking4, "Thinning Leather"),
              new GalleryItem(BagMaking5, "Glue Spray"),
              new GalleryItem(BagMaking6, "Taping Pieces"),
              new GalleryItem(BagMaking7, "Stitch Positioning"),
              new GalleryItem(BagMaking8, "Flat Stitching"),
              new GalleryItem(BagMaking9, "Cylinder Sewing"),
            ]}
            width={1534}
            height={1125}
          />

          {/* Slipper making process */}
          <Title title="Slippers Making Process" />
          <SmallGallery
            items={[
              new GalleryItem(SlipperMaking1, "Taping Design"),
              new GalleryItem(SlipperMaking2, "Cutting Material"),
              new GalleryItem(SlipperMaking3, "Sticking Pieces Together"),
              new GalleryItem(SlipperMaking4, "Heating up Lining"),
              new GalleryItem(SlipperMaking5, "Stitching"),
              new GalleryItem(SlipperMaking6, "Making Insole"),
              new GalleryItem(SlipperMaking7, "Closing the Back"),
              new GalleryItem(SlipperMaking8, "Gluing"),
              new GalleryItem(SlipperMaking9, "Hammering and Nailing"),
              new GalleryItem(SlipperMaking10, "Putting on Shoelaces"),
              new GalleryItem(SlipperMaking11, "Sanding the Bottom"),
              new GalleryItem(SlipperMaking12, "Applying Glue to Sole"),
              new GalleryItem(SlipperMaking13, "Heating up the Glue"),
              new GalleryItem(SlipperMaking14, "Pressing Sole"),
              new GalleryItem(SlipperMaking15, "Removing Shoe Lasts"),
            ]}
            width={1534}
            height={1125}
          />

          {/* Tech Pack */}
          <Title title="Tech Pack" />
          <Carousel
            images={[
              TechPack1,
              TechPack2,
              TechPack3,
              TechPack4,
              TechPack5,
              TechPack6,
              TechPack7,
            ]}
            description="Tech Pack"
            width={6384}
            height={3584}
          />

          {/* Gallery */}
          <Title title="Project Gallery" />
          <LargeGallery
            rows={[
              new GalleryRow(
                [
                  new Animation([Gallery11, Gallery12, Gallery13], 4694, 7017),
                  new Animation([Gallery21, Gallery22, Gallery23], 4684, 5625),
                ],
                GalleryRowConfig.EqualWidthEnd,
              ),
              new GalleryRow([
                new Animation([Gallery31, Gallery32], 6467, 4159),
                new Animation([Gallery41, Gallery42, Gallery43], 2900, 4159),
              ]),
              new GalleryRow([
                new Animation([Gallery51, Gallery52, Gallery53], 2900, 4159),
                new Animation([Gallery61, Gallery62, Gallery63], 6467, 4159),
              ]),
              new GalleryRow(
                [
                  new Animation([Gallery71, Gallery72, Gallery73], 4694, 7017),
                  new Animation([Gallery81, Gallery82, Gallery83], 4684, 5625),
                ],
                GalleryRowConfig.EqualWidthStart,
              ),
            ]}
            description="Lyu"
          />

          <ProjectNavigation prev="/overlap" next="/soul" />
        </Scroller>
      </PageRoot>
    </>
  );
};

export default Lyu;
