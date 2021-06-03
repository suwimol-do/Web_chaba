<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>Home</span>
          <a href="home">Home</a>
        </a-menu-item>
        <a-menu-item key="2"
          ><a-icon type="smile" />
          <span>About</span>
          <a href="about">About</a>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>Location</span></span>
          <a-menu-item key="3">
            ปราสาทศรีขมรภูมิ
            <a href="locationone"></a>
          </a-menu-item>

          <a-menu-item key="4">
            วนอุทยานแห่งชาติพนมสวาย
            <a href="locationtwo"></a
          ></a-menu-item>
          <a-menu-item key="5">
            หมู่บ้านช้างตากล้าว
            <a href="Locationthree"></a
          ></a-menu-item>
          <a-menu-item key="6">
            ปราสาทหินบ้านพลวง
            <a href="Locationfour"></a
          ></a-menu-item>
          <a-menu-item key="7">
            วัดบูรพาราม <a href="Locationfive"></a
          ></a-menu-item>
          <a-menu-item key="8">
            อ่างเก็บน้ำ ห้วยเสนง <a href="Locationsix"></a
          ></a-menu-item>
          <a-menu-item key="9">
            อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="Locationseven"></a>
          </a-menu-item>
          <a-menu-item key="10">
            หมู่บ้านทอผ้าไหมบ้านท่าสว่าง <a href="Locationeight"></a
          ></a-menu-item>
          <a-menu-item key="11">
            ศาลหลักเมืองสุรินทร์ <a href="Locationnine"></a>
          </a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="Locationten"></a
          ></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="shop" />
            <span>Service</span></span
          >
          <a-menu-item key="6">
            บริการที่ใกล้กับปราสาทศรีขมรภูมิ <a href="serviceone"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับวนอุทยานแห่งชาติพนมสวาย
            <a href="servicetwo"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับหมู่บ้านช้างตากล้าว
            <a href="servicethree"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับปราสาทหินบ้านพลวง
            <a href="servicefour"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับวัดบูรพาราม
            <a href="servicefive"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับอ่างเก็บน้ำห้วยเสนง
            <a href="servicesix"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับอนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="serviceseven"></a> </a-menu-item
          ><a-menu-item key="8">
            บริการที่ใกล้กับหมู่บ้านทอผ้าไหมบ้านท่าสว่าง
            <a href="serviceeight"></a> </a-menu-item
          ><a-menu-item key="8">
            บริการที่ใกล้กับศาลหลักเมืองสุรินทร์
            <a href="servicenine"></a> </a-menu-item
          ><a-menu-item key="8">
            บริการที่ใกล้กับตลาดช่องจอม
            <a href="serviceten"></a>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>Gallery</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>วนอุทยานแห่งชาติพนมสวาย</a-breadcrumb-item>

          <div>
            <br /><br />
            <img alt="Vue " src="../assets/วัด1.jpg" style="width: 35%" />

            <a-descriptions
              title="ข้อมูลสถานที่"
              bordered
              :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
            >
              <a-descriptions-item label="ค่าเข้า">
                <h1>คนละ 20 บาท <br /></h1>
              </a-descriptions-item>

              <a-descriptions-item label="เปิดให้เข้าชม">
                <h1>เปิด ทุกวัน 8.00-18.00 น. <br /></h1>
              </a-descriptions-item>

              <br />
              <a-descriptions-item label="ลักษณะ">
                <blockquote style="margin: 25px 50px 75px 100px">
                  <p style="text-indent: 50px; font-size: 16px" width="480">
                    วนอุทยานพนมสวาย ตั้งอยู่ที่ตำบลนาบัว อำเภอเมือง
                    จังหวัดสุรินทร์ เป็นภูเขาบนที่ราบทำนาของจังหวัดสุรินทร์
                    <br />
                    คือ พนมพรอล พนมเปร๊าะ และพนมสรัย
                    ทั้งสามลูกรวมกันกลายเป็นเขาพนมสวาย
                    ผืนป่าขนาดเล็กไม่ไกลจากตัวเมืองสุรินทร์
                    บรรยากาศร่มรื่นสวยงาม ผู้ที่มาเยือนเขาพนมสวายจะได้สักการะ 9
                    สิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองเพื่อความเป็นสิริมงคล ปคือ
                    พระใหญ่หรือพระพุทธสุรินทรมงคล อัฐิหลวงปู่ดุล อตุโล
                    พระพุทธรูปองค์ดำ หลวงปู่สวน รอยพระพุทธบาทจำลอง
                    ศาลเจ้าแม่กวนอิม เต่าศักดิ์สิทธิ์ และสระน้ำศักดิ์สิทธิ์
                    พระพุทธสุรินทรมงคล
                    พระพุทธรูปสีขาวองค์ใหญ่เด่นสง่ามองเห็นได้แต่ไกล
                    เป็นสิ่งศักดิ์สิทธิ์ศูนย์รวมจิตใจชาวเมืองสุรินทร์
                    เป็นพระพุทธรูปประทับนั่งปางประทานพร หน้าตักกว้าง 15 เมตร
                    พระบาทสมเด็จพระบรมชนกาธิเบศร
                    มหาภูมิพลอดุลยเดชมหาราชบรมนาถบพิตร ได้ทรงพระกรุณาโปรดเกล้าฯ
                    พระราชทานนามไว้ โดยสร้างแล้วเสร็จเมื่อเดือน มกราคม พ.ศ. 2520
                    ดำเนินการสร้างโดยพุทธสมาคมจังหวัดสุรินทร์ <br />
                    ที่ตั้ง : ต.สวาย อ.เมือง จ.สุรินทร์ ห่างจากตัวเมือง 25
                    กิโลเมตร
                  </p>
                </blockquote>
              </a-descriptions-item>
            </a-descriptions>
          </div>

          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        ></div>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onChange(a, b, c, d) {
      console.log(a, b, c, d);
    },
  },
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
/* Carousel */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  line-height: 400px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>