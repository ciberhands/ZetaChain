import Image from "next/image";

import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

import { ArticleNavigationTitle } from "../../ArticleNavigation";
import { IconDiscord } from "../../Icons";
import { PrimaryLink } from "../../Link";

export const DeveloperCommunity: React.FC = () => {
  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10 lg:col-span-6 flex lg:justify-center">
        <Image
          src={`${basePath}/img/pages/developer-community.svg`}
          alt="Developer Community"
          width={574}
          height={288}
          className="w-auto sm:w-full !rounded-none !mt-0 max-w-[250px] sm:max-w-[350px] lg:max-w-[574px]"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 lg:gap-6 col-span-10 lg:col-span-4">
        <ArticleNavigationTitle title="Developer Community" colorClass="bg-[#FF5AF1]" />

        <p className="text-base text-grey-400 dark:text-grey-300">
          Get the help you need when you need it, from a supportive, active and growing developer community.
        </p>

        <PrimaryLink
          href={globalLinks.discordLink}
          target="_blank"
          icon={<IconDiscord className="h-6 w-6 text-grey-400 dark:text-grey-300" />}
        >
          Join the Discord
        </PrimaryLink>
      </div>
    </div>
  );
};