<template lang="pug">
main.about(:class="(show ? 'show' : 'hide') + (trueHide ? ' true-hide' : '')")
  .summary
    h1
      | Welcome to Memenatis!
      br
      | A cryptocurrency veiled in mystery by the elusive Illuminati.
    h2
      | Are you bold enough to join the select few who dare to venture where others fear? Once you enter the realm of Memenatis, there's no looking back. Brace yourself to unravel the blockchain universe's with Memenatis, the Illuminati's prized secret.
    h3
      a.scroll-invite(href="/projects") Time to start unraveling...
</template>

<style lang="stylus">

main.about
  transition margin 0.3s ease
  margin ($content-margin-top + 1.6 * $theme-margin-top) $theme-margin-left-right 0
  display block

  .summary
    h1
      max-width 440px
    h2, h3
      max-width 400px
      padding-top 1.3em

  h1
    font-size ($golden-num)em
    line-height 1.3
    font-family 'Raleway', sans-serif
    font-weight 700
    // 600
    color $theme-color-white

  h2
    font-family $the-serif, serif
    font-weight 400
    color $theme-color-white

  h3
    font-family $the-serif, serif
    font-weight 300
    color alpha($theme-color-white, 0.9)

  h2, h3
    padding 0
    font-size 1em
    line-height 1.4
    margin-left 0
    transition padding-top 0.3s ease, margin-left 0.3s ease

  h1, h2, h3
    transform translateY(20px)
    opacity 0

  &.show
    pointer-events all
    h1, h2, h3
      animation show-content-translate 0.7s cubic-bezier(0,.58,0,1) forwards, show-content-opacity 0.7s ease-out forwards
    h1
      animation-delay 0.85s
    h2
      animation-delay 1s
    h3
      animation-delay 1.15s

  &.hide
    pointer-events none
    h1, h2, h3
      transform translateY(0px)
      animation hide-content-opacity 0.3s ease-out forwards
      animation-delay 0s

  &.true-hide
    display none

$media-content-max-width = "only screen and (min-width: " + $content-max-width + ")"

@media $media-content-max-width
  main.about
    .summary
      h2
        padding-top 2.5em
        margin-left 308px
      h3
        padding-top 2.5em
        margin-left 616px

@media only screen and (min-width: 1801px)

  main.about
    margin 2*$content-margin-top + $theme-margin-top $theme-margin-left-right 0

@media only screen and (min-height: 601px) and (max-height: 640px)

  main.about
    margin $content-margin-top + $theme-margin-top $theme-margin-left-right 0

@media only screen and (max-height: 600px)

  main.about
    margin $content-margin-top + $theme-margin-top $theme-margin-left-right 0
    h1
      font-size 1.2em
    h2, h3
      font-size (1.2/$golden-num)em

@media only screen and (max-width: 600px)

  main.about
    h1
      font-size 1.2em
    h2, h3
      font-size (1.2/$golden-num)em

@media only screen and (max-width: 400px)

  main.about
    margin ($content-margin-top-mobile + $theme-margin-top-mobile - 15px) $theme-margin-left-right-mobile 0

@media only screen and (min-width: 401px) and (max-width: 450px) and (max-height: 580px)

  main.about
    margin ($content-margin-top-mobile + $theme-margin-top-mobile - 15px) $theme-margin-left-right 0

@media only screen and (max-width: 340px) and (max-height: 540px)

  main.about
    margin ($content-margin-top-mobile + $theme-margin-top-mobile - 25px) ($theme-margin-left-right-mobile - 10px) 0

@media only screen and (max-width: 380px) and (max-height: 570px)

  main.about
    h1
      font-size 1em
    h2, h3
      font-size (1/$golden-num)em

@keyframes show-content-translate
  0%
    transform translateY(20px)
  100%
    transform translateY(0)

@keyframes show-content-opacity
  0%
    opacity 0
  100%
    opacity 1

@keyframes hide-content-opacity
  0%
    opacity 1
  100%
    opacity 0
</style>

<script>
export default {
  name: 'about-content',

  props: {
    show: Boolean,
    trueHide: Boolean,
  },

  data() {
    return {};
  },
};
</script>
