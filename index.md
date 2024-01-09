---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "1BRC"
  text: "1 Billion Row Challenge"
  tagline: Calculate the min, max, and average of <b>1 billion</b> measurements
  image: ./assets/hero.png
  actions:
    - theme: brand
      text: Choose a language 👇
    - theme: alt
      text: Original blog post
      link: https://www.morling.dev/blog/one-billion-row-challenge/

features:
  - icon:
      src: ./assets/java.png
    title: 1BRC in Java
    details: The original 1BRC language! 🎉
    link: https://github.com/gunnarmorling/1brc#submitting
    linkText: Submit your solution!
  - icon:
      src: ./assets/c.png
    title: 1BRC in C/C++
    details: Try your hand at processing 12 GB of text using low-level C code! ⚡
    link: https://github.com/dannyvankooten/1brc#submitting
    linkText: Submit your solution!
  - icon:
      src: ./assets/python.png
    title: 1BRC in Python
    details: Use the power of snakes to read 1 billion lines of text! 🐍
    link: https://github.com/ifnesi/1brc#submitting
    linkText: Submit your solution!
  - icon:
      src: ./assets/go.png
    title: 1BRC in Go
    details: Go get started to see if you can average 1B measurements in Go! 🐹
    link: https://github.com/AlexanderYastrebov/1brc#submitting
    linkText: Submit your solution!
  - icon:
      src: ./assets/javascript.png
    title: 1BRC in JavaScript
    details: Wrangle with the world's most popular programming language to process 1B rows! 💻
    link: https://github.com/Edgar-P-yan/1brc-nodejs-bun#submitting
    linkText: Submit your solution!
  - icon:
      src: ./assets/rust.png
    title: 1BRC in Rust
    details: Embrace your inner iron crab and read a ginormous file in Rust! 🦀
    link: https://github.com/tumdum/1brc#submitting
    linkText: Submit your solution!
  - icon:
      src: ./assets/zig.png
    title: 1BRC in Zig
    details: Use this new language to process 1B rows of text! 🧩
    link: https://github.com/candrewlee14/1brc-zig#submitting
    linkText: Submit your solution!
---

<script setup>
import HomeContent from './.vitepress/components/HomeContent.vue'
</script>

<style>
/* First action button has no action! Remove its button-like style. */
.VPHomeHero .actions .action:first-of-type .VPButton {
  background-color: transparent;
}
</style>

<HomeContent>

<small>Don't see your favorite language listed above? [Open an Issue to add it!](https://github.com/1brc/1brc.github.io/issues/new)</small>

**🎉 Open for submissions!** \
📆 Challenge runs from **Jan 1, 2024** to **Jan 31, 2024**

Choose one of the languages listed above to see the language-specific leaderboard and instructions for submitting your solution to that language's repository.

## Global leaderboard

|     |       Time | Solution                                                                                                                     | Language | Author                                             |
| --- | ---------: | ---------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| 1.  |     6.159s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_royvanrijn.java)    | [Java]   | [royvanrijn](https://github.com/royvanrijn)        |
| 2.  |     6.532s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_thomaswue.java)     | [Java]   | [Thomas Wuerthinger](https://github.com/thomaswue) |
| 3.  |     7.620s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_merykitty.java)     | [Java]   | [Quan Anh Mai](https://github.com/merykitty)       |
| 4.  |     9.062s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_obourgain.java)     | [Java]   | [obourgain](https://github.com/obourgain)          |
| 5.  |     9.338s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_ebarlas.java)       | [Java]   | [Elliot Barlas](https://github.com/ebarlas)        |
| 6.  |    10.589s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_artsiomkorzun.java) | [Java]   | [Artsiom Korzun](https://github.com/artsiomkorzun) |
| 7.  |    10.613s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_spullara.java)      | [Java]   | [Sam Pullara](https://github.com/spullara)         |
| 8.  |    11.038s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_asun.java)          | [Java]   | [Andrew Sun](https://github.com/as-com)            |
| 9.  |    11.222s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_isolgpus.java)      | [Java]   | [Jamie Stansfield](https://github.com/isolgpus)    |
| 10. |    13.277s | [link](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage_yavuztas.java)      | [Java]   | [Yavuz Tas](https://github.com/yavuztas)           |
|     | 4m 13.449s | [link](https://github.com/gunnarmorling/onebrc/blob/main/src/main/java/dev/morling/onebrc/CalculateAverage.java)             | [Java]   | _Reference implementation_                         |

[Java]: https://github.com/gunnarmorling/1brc

</HomeContent>
