<script setup lang="ts"></script>

<template>
  <main class="pa-16 h-dvh w-dvw bg-surface text-on-surface overflow-y-scroll flex flex-wrap gap-4 w-full justify-center">
    <div class="w-128 grid cols-2 gap-2">
      <div class="pa-2 shape-s body-large bg-primary text-on-primary">primary</div>
      <div class="pa-2 shape-s body-large bg-on-primary text-primary">on-primary</div>
      <div class="pa-2 shape-s body-large bg-primary-container text-on-primary-container">primary-container</div>
      <div class="pa-2 shape-s body-large bg-on-primary-container text-primary-container">on-primary-container</div>
      <div class="pa-2 shape-s body-large bg-secondary text-on-secondary">secondary</div>
      <div class="pa-2 shape-s body-large bg-on-secondary text-secondary">on-secondary</div>
      <div class="pa-2 shape-s body-large bg-secondary-container text-on-secondary-container">secondary-container</div>
      <div class="pa-2 shape-s body-large bg-on-secondary-container text-secondary-container">on-secondary-container</div>
      <div class="pa-2 shape-s body-large bg-tertiary text-on-tertiary">tertiary</div>
      <div class="pa-2 shape-s body-large bg-on-tertiary text-tertiary">on-tertiary</div>
      <div class="pa-2 shape-s body-large bg-tertiary-container text-on-tertiary-container">tertiary-container</div>
      <div class="pa-2 shape-s body-large bg-on-tertiary-container text-tertiary-container">on-tertiary-container</div>
      <div class="pa-2 shape-s body-large bg-error text-on-error">error</div>
      <div class="pa-2 shape-s body-large bg-on-error text-error">on-error</div>
      <div class="pa-2 shape-s body-large bg-error-container text-on-error-container">error-container</div>
      <div class="pa-2 shape-s body-large bg-on-error-container text-error-container">on-error-container</div>
      <div class="pa-2 shape-s body-large row-span-2 bg-surface text-on-surface">surface</div>
      <div class="pa-2 shape-s body-large bg-on-surface text-surface">on-surface</div>
      <div class="pa-2 shape-s body-large bg-on-surface-variant text-surface">on-surface-variant</div>
      <div class="pa-2 shape-s body-large bg-surface-bright">surface-bright</div>
      <div class="pa-2 shape-s body-large bg-surface-dim">surface-dim</div>
      <div class="pa-2 shape-s body-large bg-outline text-surface">outline</div>
      <div class="pa-2 shape-s body-large bg-outline-variant">outline-variant</div>
      <div class="pa-2 shape-s body-large bg-inverse-surface text-surface">inverse-surface</div>
      <div class="pa-2 shape-s body-large bg-inverse-on-surface">inverse-on-surface</div>
      <div class="pa-2 shape-s body-large bg-scrim text-white">scrim</div>
      <div class="pa-2 shape-s body-large bg-shadow text-white">shadow</div>
      <div class="pa-2 shape-s body-large col-span-2 bg-inverse-primary">inverse-primary</div>
      <div class="pa-2 shape-s body-large col-span-2 bg-surface-container-lowest text-on-surface">surface-container-lowest</div>
      <div class="pa-2 shape-s body-large col-span-2 bg-surface-container-low text-on-surface">surface-container-low</div>
      <div class="pa-2 shape-s body-large col-span-2 bg-surface-container text-on-surface-container">surface-container</div>
      <div class="pa-2 shape-s body-large col-span-2 bg-surface-container-high text-on-surface-container-high">surface-container-high</div>
      <div class="pa-2 shape-s body-large col-span-2 bg-surface-container-highest text-on-surface-container-highest">surface-container-highest</div>
    </div>

    <div class="w-128 flex flex-col items-center space-y-4">
      <div class="grid cols-3 gap-4">
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-full">shape-full</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-xl-top">shape-xl-top</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-xl">shape-xl</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-l-top">shape-l-top</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-l-end">shape-l-end</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-l-start">shape-l-start</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-l">shape-l</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-m">shape-m</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-s">shape-s</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-xs-top">shape-xs-top</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-xs">shape-xs</div>
        <div class="h-28 w-28 grid place-items-center text-center bg-primary text-on-primary shape-none">shape-none</div>
      </div>

      <div class="flex flex-col items-center">
        <div class="display-large">display-large</div>
        <div class="display-medium">display-medium</div>
        <div class="display-small">display-small</div>
        <div class="headline-large">headline-large</div>
        <div class="headline-medium">headline-medium</div>
        <div class="headline-small">headline-small</div>
        <div class="title-large">title-large</div>
        <div class="title-medium">title-medium</div>
        <div class="title-small">title-small</div>
        <div class="body-large">body-large</div>
        <div class="body-medium">body-medium</div>
        <div class="body-small">body-small</div>
        <div class="label-large">label-large</div>
        <div class="label-medium">label-medium</div>
        <div class="label-small">label-small</div>
      </div>
    </div>
  </main>
</template>
