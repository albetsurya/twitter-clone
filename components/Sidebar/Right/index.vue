<script setup>
const whatsHappeningItems = ref([
  { title: "SpaceX", count: "2.4k Tweets" },
  { title: "#CodingIsFun", count: "8.8k Tweets" },
  { title: "#artforall", count: "12.2k Tweets" },
]);

const whoToFollowItems = ref([
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    img: "https://picsum.photos/200/200",
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <!-- Preview Card : Whats Happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
        :key="whatsHappening.title"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card : Who To Follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="whoTofollow in whoToFollowItems"
        :key="whoTofollow.title"
      >
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoTofollow.img"
              alt="whoToFollow.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                {{ whoTofollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoTofollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full bg-red-400">
            <button
              class="px-4 py-2 font-bold text-xs text-white bg-black rounded-full dark:text-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>
