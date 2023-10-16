import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { u as useSeoMeta } from './index-f6ef10bc.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SectionTitle",
  __ssrInlineRender: true,
  props: {
    sectionName: String,
    boldSectionName: {
      default: false,
      type: Boolean
    },
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p class="${ssrRenderClass([__props.boldSectionName ? "font-bold" : "font-thin", "sectionTitle"])}">${ssrInterpolate(__props.sectionName)}</p><p class="title mt-2">${ssrInterpolate(__props.title)}</p><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SectionTitle = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    sectionName: "Welcome, my name is",
    title: "Arthur Paucke",
    boldSectionName: true
  }, null, _parent));
  _push(`<p class="mt-2 text-textColor">I\u2019m a Developer and UI/UX Designer</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionTitle = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    sectionName: "Introduction",
    title: "About Me"
  }, null, _parent));
  _push(`<p class="mt-2 text-textColor"> So what should I say? I\u2019m a passionate Developer and Designer. Programming is what connects me with people and where I learn every day something new. <br><br> It all started when I was arround 12 years old when my teacher showed us Scratch. A platform where you can build simple games in blocky style. Since then I wanted more and more. So first I learned Python, a easy to use language for beginners. With the years I learned HTML, CSS, JS/TS, Java and now Vue/Nuxt. <br><br> Here are a few languages I work with: </p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Artus Portfolio",
      ogTitle: "Artus Portfolio",
      description: "I'm Artus, a Developer and Designer! Take a look at my Portfolio",
      ogDescription: "I'm Artus, a Developer and Designer! Take a look at my Portfolio",
      ogImage: "/images/ogImage.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeader = __nuxt_component_0;
      const _component_SectionAbout = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center px-12 md:px-32 child:py-40" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionHeader, {
        id: "home",
        class: "w-full min-h-[100vh]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionAbout, {
        id: "about",
        class: "md:w-[50vw]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionAbout, {
        id: "about2",
        class: "md:w-[50vw]"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ba30acfb.mjs.map
