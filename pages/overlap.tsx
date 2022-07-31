import { NextPage } from "next";
import Head from "next/head";

import Carousel from "../components/carousel";
import CenterImage from "../components/center-image";
import FullImage from "../components/full-image";
import HorizontalGallery from "../components/horizontal-gallery";
import ImageText from "../components/image-text";
import LargeGallery from "../components/large-gallery";
import OverlayImage from "../components/overlay-image";
import PageRoot from "../components/page-root";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";
import SmallGallery from "../components/small-gallery";
import Spacing from "../components/spacing";
import Subtitle from "../components/subtitle";
import TextImage from "../components/text-image";
import Title from "../components/title";
import TopDisplay from "../components/top-display";
import Animation from "../utils/animation";
import GalleryItem from "../utils/gallery-item";
import { GalleryRowData } from "../utils/gallery-row-data";
import ImageData from "../utils/image-data";
import useAutoscroll from "../utils/use-autoscroll";
import useFrameIndex from "../utils/use-frame-index";
import usePrev from "../utils/use-prev";

import Benchmark from "../images/overlap/benchmark-full.webp";
import CMF1 from "../images/overlap/cmf/cmf-1-full.webp";
import CMF2 from "../images/overlap/cmf/cmf-2-full.webp";
import CMF3 from "../images/overlap/cmf/cmf-3-full.webp";
import CMF4 from "../images/overlap/cmf/cmf-4-full.webp";
import CMF5 from "../images/overlap/cmf/cmf-5-full.webp";
import CMF6 from "../images/overlap/cmf/cmf-6-full.webp";
import CMF7 from "../images/overlap/cmf/cmf-7-full.webp";
import CMF8 from "../images/overlap/cmf/cmf-8-full.webp";
import DNA1 from "../images/overlap/dna/dna-1-small.webp";
import DNA2 from "../images/overlap/dna/dna-2-small.webp";
import DNA3 from "../images/overlap/dna/dna-3-small.webp";
import DNA4 from "../images/overlap/dna/dna-4-small.webp";
import DNA5 from "../images/overlap/dna/dna-5-small.webp";
import FileSorterImage from "../images/overlap/file-sorter-half.webp";
import FileSorterUseImage1 from "../images/overlap/file-sorter-use-1-big.webp";
import FileSorterUseImage21 from "../images/overlap/file-sorter-use-2-1-big.webp";
import FileSorterUseImage22 from "../images/overlap/file-sorter-use-2-2-big.webp";
import FileSorterUseImage23 from "../images/overlap/file-sorter-use-2-3-big.webp";
import Gallery1 from "../images/overlap/gallery/gallery-1-full.webp";
import Gallery2 from "../images/overlap/gallery/gallery-2-half.webp";
import Gallery3 from "../images/overlap/gallery/gallery-3-half.webp";
import Gallery4 from "../images/overlap/gallery/gallery-4-half.webp";
import Gallery5 from "../images/overlap/gallery/gallery-5-full.webp";
import Gallery6 from "../images/overlap/gallery/gallery-6-full.webp";
import Ideation from "../images/overlap/ideation-full.webp";
import ManifestoImage from "../images/overlap/manifesto-half.webp";
import Overlay1 from "../images/overlap/overlay-1-full.webp";
import Overlay2 from "../images/overlap/overlay-2-full.webp";
import Overlay3 from "../images/overlap/overlay-3-full.webp";
import Process1 from "../images/overlap/process/process-01-small.webp";
import Process2 from "../images/overlap/process/process-02-small.webp";
import Process3 from "../images/overlap/process/process-03-small.webp";
import Process4 from "../images/overlap/process/process-04-small.webp";
import Process5 from "../images/overlap/process/process-05-small.webp";
import Process6 from "../images/overlap/process/process-06-small.webp";
import Process7 from "../images/overlap/process/process-07-small.webp";
import Process8 from "../images/overlap/process/process-08-small.webp";
import Process9 from "../images/overlap/process/process-09-small.webp";
import Process10 from "../images/overlap/process/process-10-small.webp";
import Process11 from "../images/overlap/process/process-11-small.webp";
import Process12 from "../images/overlap/process/process-12-small.webp";
import Prototype from "../images/overlap/prototype-full.webp";
import Set1 from "../images/overlap/set-1-half.webp";
import Set2 from "../images/overlap/set-2-half.webp";
import Set3 from "../images/overlap/set-3-half.webp";
import TechDrawing1 from "../images/overlap/tech-drawing/tech-drawing-01-full.webp";
import TechDrawing2 from "../images/overlap/tech-drawing/tech-drawing-02-full.webp";
import TechDrawing3 from "../images/overlap/tech-drawing/tech-drawing-03-full.webp";
import TechDrawing4 from "../images/overlap/tech-drawing/tech-drawing-04-full.webp";
import TechDrawing5 from "../images/overlap/tech-drawing/tech-drawing-05-full.webp";
import TechDrawing6 from "../images/overlap/tech-drawing/tech-drawing-06-full.webp";
import TechDrawing7 from "../images/overlap/tech-drawing/tech-drawing-07-full.webp";
import TechDrawing8 from "../images/overlap/tech-drawing/tech-drawing-08-full.webp";
import TechDrawing9 from "../images/overlap/tech-drawing/tech-drawing-09-full.webp";
import TechDrawing10 from "../images/overlap/tech-drawing/tech-drawing-10-full.webp";
import TechDrawing11 from "../images/overlap/tech-drawing/tech-drawing-11-full.webp";
import TimerImage from "../images/overlap/timer-half.webp";
import TimerUseImage from "../images/overlap/timer-use-big.webp";
import TrayImage from "../images/overlap/tray-half.webp";
import TrayUseImage1 from "../images/overlap/tray-use-1-big.webp";
import TrayUseImage2 from "../images/overlap/tray-use-2-big.webp";

const Overlap: NextPage = () => {
  const scrollDiv = useAutoscroll();
  const currentIndex = useFrameIndex(2000);
  const prev = usePrev();

  return (
    <>
      <Head>
        <title>Overlap | Shirley Lyu Portfolio</title>
      </Head>

      <PageRoot>
        <Sidebar route="overlap" prevRoute={prev} />
        <Scroller bgColor="bg-[#FDF9F1]" divRef={scrollDiv}>
          <TopDisplay project="overlap" />

          {/* Manifesto */}
          <TextImage
            title="Project Manifesto"
            content={[
              "A collection of office accessories that can provide users with an intuitive concept of category. To help users better organize their time, space, and objects.",
            ]}
            image={ManifestoImage}
            width={6240}
            height={4160}
          />

          {/* Overlap */}
          <Title title="Overlap Set" />
          <HorizontalGallery
            items={[
              new GalleryItem(Set1, "Timer", "Section Time"),
              new GalleryItem(
                Set2,
                "File Sorter",
                "Categorize files, books, etc.",
              ),
              new GalleryItem(Set3, "Tray", "Store pens, pins, etc."),
            ]}
            sparse={true}
            width={1084}
            height={1084}
          />
          <Title title="Moodboard: Time, Space, Organizing" />
          <OverlayImage
            title="Overlapped"
            content="Time and space sometimes overlap."
            image={Overlay1}
            width={9534}
            height={3742}
          />
          <OverlayImage
            title="Changeable"
            content="Time changes are unnoticeable, so objects’ movements and Changes are used to define time pass and environment change."
            image={Overlay2}
            width={9534}
            height={3742}
          />
          <OverlayImage
            title="Joyful"
            content="Categorizing can be a joyful thing!"
            image={Overlay3}
            width={9534}
            height={3742}
          />

          {/* Timer */}
          <TextImage
            title="Timer"
            content={[
              "Overlapped part = Set up time",
              "1 Slice = 10 mins",
              "Total: 1 hour",
            ]}
            image={TimerImage}
            height={4125}
            width={4684}
          />
          <ImageText
            title="Timer usage"
            content={["Set a Time", "Set-time Passing"]}
            source={new ImageData(TimerUseImage, 6400, 4517)}
          />

          {/* File Sorter */}
          <TextImage
            title="File Sorter"
            content={[
              "Four different translucent colored blockers categorize files with height and colors.",
            ]}
            image={FileSorterImage}
            width={4162}
            height={4125}
          />
          <ImageText
            title="File sorter usage 1"
            content={["Put in file"]}
            source={new ImageData(FileSorterUseImage1, 6300, 4500)}
          />
          <ImageText
            title="File sorter usage 2"
            content={["Different Overlapping Order"]}
            source={
              new Animation(
                [
                  FileSorterUseImage21,
                  FileSorterUseImage22,
                  FileSorterUseImage23,
                ],
                6300,
                5387,
              )
            }
            frame={currentIndex}
          />

          {/* Tray */}
          <TextImage
            title="Tray"
            content={[
              "4 Different color, size, and depth trays to categorize office accessories.",
            ]}
            image={TrayImage}
            width={4684}
            height={4125}
          />
          <ImageText
            title="Tray usage 1"
            content={["Different combinations"]}
            source={new ImageData(TrayUseImage1, 6300, 4500)}
          />
          <ImageText
            title="Tray usage 2"
            content={["Different usage"]}
            source={new ImageData(TrayUseImage2, 6296, 4500)}
          />

          {/* Tech Drawing */}
          <Title title="Tech Drawing" />
          <Carousel
            images={[
              TechDrawing1,
              TechDrawing2,
              TechDrawing3,
              TechDrawing4,
              TechDrawing5,
              TechDrawing6,
              TechDrawing7,
              TechDrawing8,
              TechDrawing9,
              TechDrawing10,
              TechDrawing11,
            ]}
            description="Tech Drawing"
            width={8000}
            height={4500}
          />

          {/* Design Process */}
          <Title title="Design Process" />
          <Subtitle subtitle="HAY's Brand DNA Analysis" />
          <HorizontalGallery
            items={[
              new GalleryItem(DNA1, undefined, "Playful"),
              new GalleryItem(DNA2, undefined, "Accessible"),
              new GalleryItem(DNA3, undefined, "Adaptive"),
              new GalleryItem(DNA4, undefined, "Contemporary"),
              new GalleryItem(DNA5, undefined, "Vibrant"),
            ]}
            sparse={false}
            width={926}
            height={1321}
          />

          {/* Brand Benchmark */}
          <Subtitle subtitle="HAY's Brand Benchmarks" />
          <CenterImage
            image={Benchmark}
            alt="Brand benchmark"
            width={4784}
            height={2735}
          />

          {/* Ideation */}
          <Subtitle subtitle="Overlap Ideation" />
          <FullImage
            image={Ideation}
            alt="Ideation for Overlap"
            width={8000}
            height={4500}
          />

          {/* Prototype */}
          <Subtitle subtitle="Prototype &amp; Form Perfection" />
          <FullImage
            image={Prototype}
            alt="Prototype for Overlap"
            width={7677}
            height={4163}
          />

          {/* CMF & Manufacturing */}
          <Title title="CMF &amp; Manufacturing" />
          <Carousel
            images={[CMF1, CMF2, CMF3, CMF4, CMF5, CMF6, CMF7, CMF8]}
            description="CMF"
            width={8000}
            height={4500}
          />

          {/* Making Process */}
          <Title title="Final Model Making Process" />
          <SmallGallery
            items={[
              new GalleryItem(Process1, "Wood Cut"),
              new GalleryItem(Process2, "Wood Flatten"),
              new GalleryItem(Process3, "CNC"),
              new GalleryItem(Process4, "Laser Cut"),
              new GalleryItem(Process5, "Band Saw Cut"),
              new GalleryItem(Process6, "Machine Sanding"),
              new GalleryItem(Process7, "Hand Sanding"),
              new GalleryItem(Process8, "Router Chamfer"),
              new GalleryItem(Process9, "Wood Stain"),
              new GalleryItem(Process10, "Acrylic Gluing"),
              new GalleryItem(Process11, "Clear Matte Finish Spray"),
              new GalleryItem(Process12, "Assembly"),
            ]}
            width={3063}
            height={2248}
          />

          {/* Gallery */}
          <Title title="Product Gallery" />
          <LargeGallery
            rows={[
              new GalleryRowData([new ImageData(Gallery1, 12767, 7167)]),
              new GalleryRowData([
                new ImageData(Gallery2, 4684, 3750),
                new ImageData(Gallery3, 4684, 3750),
                new ImageData(Gallery4, 3067, 3750),
              ]),
              new GalleryRowData([new ImageData(Gallery5, 12767, 7167)]),
              new GalleryRowData([new ImageData(Gallery6, 12767, 7125)]),
            ]}
            description="Overlap"
            botSpacing={false}
          />

          <div className="text-center text-xs">
            This is not a product of Hay. Branding and logo marks are used for
            demonstration purposes only.
          </div>
          <Spacing />

          <ProjectNavigation next="/lyu" />
        </Scroller>
      </PageRoot>
    </>
  );
};

export default Overlap;
