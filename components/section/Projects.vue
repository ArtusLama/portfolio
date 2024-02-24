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
            <ProjectsCard title="Decomposition of a Number"
                          description="This project was created because of a math challange to make the life easier."
                          image-path="images/projects/NumberDecomposition.svg"
                          :tags='["Python"]'
                          github-link="https://github.com/ArtusLama/decomposition-of-a-number/"/>




            <ProjectsCard title="NOT UP TO DATE"
                          description="This list is not up to date! You can see my projects on GitHub"
                          image-path="images/projects/NotAllProjects.svg"
                          :tags='[]'
                          github-link="https://github.com/ArtusLama?tab=repositories"/>
        </div>
    </div>
</template>