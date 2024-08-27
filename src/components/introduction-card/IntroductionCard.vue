<script setup lang="ts">
interface IntroductionCard {
    id: number
    title: string
    content: string
    badgeText: string
    badgeStyle: string
    imgUrl: string
    btnText: string
    bgColor: string
  }

const props = defineProps<{
  introductionCard: IntroductionCard
}>()
</script>

<template>
  <div class="intro-card-container">
    <q-card class="intro-card" flat :class="introductionCard.bgColor">
      <q-card-section class="intro-card-wrapper" horizontal>
        <q-card-section class="main-container no-padding">
          <div class="wrapper-main flex">
            <q-badge class="badge" :class="introductionCard.badgeStyle">{{ props.introductionCard.badgeText }}</q-badge>
            <div>
              <div class="title q-mt-sm q-mb-xs">{{ props.introductionCard.title }}</div>
              <div class="content">{{ props.introductionCard.content }}</div>
            </div>
          </div>

          <q-btn class="btn text-capitalize">
            <div class="text">{{ props.introductionCard.btnText }}</div>
            <q-icon class="icon" name="arrow_forward" />
          </q-btn>
        </q-card-section>

        <q-card-section class="image-container col-5 flex flex-center no-padding">
          <img
            class="img-promote rounded-borders"
            :src="introductionCard.imgUrl"
            alt="promote-man.png"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div> 
</template>

<style lang="scss" scoped>
.orange-badge {
  color: #FFFFFF;
  background: #FFD480;
}
.green-badge {
  color: #FFFFFF;
  background: #3BB77E;
}
.card-bg-orange {
  background-color: rgba(255,245,225,.85)
}
.card-bg-green {
  background-color: rgba(210,239,225,.85)
}
.intro-card-container {
  background-image: url(../../assets/images/intro-card-bg.png);
  max-width: 590px;
  width: 100%;

  .intro-card {
    height: 300px;
    padding: 33px 0px 33px 48px;
    font-family: "Quicksand", sans-serif;

    .intro-card-wrapper {
      height: 100%;

      .main-container {
        height: fit-content;

        .wrapper-main {
          height: 140px;
          width: 300px;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 43px;

          .badge {
            width: 86px;
            height: 26px;
            padding: 7px;
            border-radius: 3px;
            font-size: 12px;
          }

          .title {
            font-size: 28px;
            margin: 0 0 15px;
            font-weight: 600;
            line-height: 35px;
          }
          
          .content {
            font-size: 18px;
            color: #838383;
            font-weight: 500;
            line-height: 23px;
          }
        }

        .btn {
          background-color: #3BB77E;
          color: #FFFFFF;
          font-size: 16px;
          padding: 14px;
          width: 143px;
          height: 52px;

          .text {
            margin-right: 9px;
          }

          .icon {
            font-size: 18px;
          }
        }
      }

      .image-container {
        position: absolute;
        bottom: -33px;
        right: 0;
        width: fit-content;

        .img-promote {
          object-fit: contain;
        }  
      } 
    }  
  }
}
</style>