<template>
    <div>
        <SectionTitle
            sectionName="Projects"
            title="Things I have coded"
        />
        <p class="mt-4 text-textColor">
            Here are some projects I did to level up my skills.
            (Also take a look at my <a href="https://github.com/ArtusLama?tab=repositories" target="_blank">repositories</a>)
        </p>
        <div class="flex gap-10 mt-5 flex-wrap">
            <ProjectsCard title="Test Project"
                          description="This was a simple tiny project for testing lol. Pretty nice isnt it? Or what do you think ;)"
                          image-path="images/TestImage.png"
                          :tags='["Vue", "Typescript", "test123", "Tailwind"]'
                          github-link="https://github.com"
                          external-link="https://example.com"/>
            <ProjectsCard title="Test Project"
                          description="This was a simple tiny project for testing lol. Pretty nice isnt it? Or what do you think ;)"
                          image-path="images/TestImage.png"
                          :tags='["Vue", "Typescript", "test123", "Tailwind"]'
                          github-link="https://github.com"
                          external-link="https://example.com"/>
            <ProjectsCard title="Test Project"
                          description="This was a simple tiny project for testing lol. Pretty nice isnt it? Or what do you think ;)"
                          image-path="images/TestImage.png"
                          :tags='["Vue", "Typescript", "test123", "Tailwind"]'
                          github-link="https://github.com"
                          external-link="https://example.com"/>
            <ProjectsCard title="Test Project"
                          description="This was a simple tiny project for testing lol. Pretty nice isnt it? Or what do you think ;)"
                          image-path="images/TestImage.png"
                          :tags='["Vue", "Typescript", "test123", "Tailwind"]'
                          github-link="https://github.com"
                          external-link="https://example.com"/>
        </div>
    </div>
</template>