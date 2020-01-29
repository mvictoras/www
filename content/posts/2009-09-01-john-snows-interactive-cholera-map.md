---
title: John Snow’s Interactive Cholera Map
author: mvictoras
type: post
date: 2009-09-01T19:41:06+00:00
url: /2009/09/01/john-snows-interactive-cholera-map/
featured_image: /wp-content/uploads/2015/03/CholeraScreenCover.jpg
video_format_choose:
  - youtube
qode_animate-page-title:
  - no
qode_show-sidebar:
  - default
qode_hide-featured-image:
  - yes
qode_page_background_image_fixed:
  - yes
qode_post_style_masonry_date_image:
  - full
qode_post_style_masonry_gallery:
  - default
gallery_type:
  - slider
categories:
  - Graduate Projects

---
<canvas data-processing-sources="/wp-content/uploads/2020/01/cholera\_map/InteractiveCholeraMap.pde /wp-content/uploads/2020/01/cholera\_map/DataParser.pde /wp-content/uploads/2020/01/cholera\_map/Globals.pde /wp-content/uploads/2020/01/cholera\_map/BarChart.pde /wp-content/uploads/2020/01/cholera\_map/Chart.pde /wp-content/uploads/2020/01/cholera\_map/Grid.pde /wp-content/uploads/2020/01/cholera\_map/CholeraMap.pde /wp-content/uploads/2020/01/cholera\_map/HorizontalBarChart.pde /wp-content/uploads/2020/01/cholera\_map/Dates.pde /wp-content/uploads/2020/01/cholera\_map/LineChart.pde /wp-content/uploads/2020/01/cholera\_map/Deaths.pde /wp-content/uploads/2020/01/cholera\_map/TimeLineChart.pde /wp-content/uploads/2020/01/cholera\_map/DrawingArea.pde /wp-content/uploads/2020/01/cholera\_map/VerticalBarChart.pde"></canvas>

<div class="wp-caption alignright">
  <div id="attachment_16326" style="width: 310px" class="wp-caption aligncenter">
    <a href="http://www.vmateevitsi.com/wp-content/uploads/2015/03/JohnSnowCholeraMap.jpg"><img aria-describedby="caption-attachment-16326" class="size-medium wp-image-16326" src="http://www.vmateevitsi.com/wp-content/uploads/2015/03/JohnSnowCholeraMap-300x280.jpg" alt="John Snow's Cholera Map" width="300" height="280" srcset="http://www.vmateevitsi.com/wp-content/uploads/2015/03/JohnSnowCholeraMap-300x280.jpg 300w, http://www.vmateevitsi.com/wp-content/uploads/2015/03/JohnSnowCholeraMap-1024x955.jpg 1024w, http://www.vmateevitsi.com/wp-content/uploads/2015/03/JohnSnowCholeraMap-700x653.jpg 700w, http://www.vmateevitsi.com/wp-content/uploads/2015/03/JohnSnowCholeraMap.jpg 1920w" sizes="(max-width: 300px) 100vw, 300px" /></a>
    
    <p id="caption-attachment-16326" class="wp-caption-text">
      Original map by John Snow showing the clusters of cholera cases in the London epidemic of 1854.
    </p>
  </div>
</div>

In 1854 in the Soho district of London there was a severe cholera outbreak, famously known as <a class="external text" href="http://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak" rel="nofollow">The 1854 Broad Street cholera outbreak</a>, taking&nbsp;the lives of 616 people. While the [bacterium was isolated][1]&nbsp;the same year by Italian anatomist Filippo Pacini, it was still unknown how the disease spread, &nbsp;crediting the transmission to&nbsp;bad air, known as &#8220;miasma&#8221;. John Snow, an English physician and advocate of medical hygiene, being very&nbsp;skeptic, began&nbsp;investigating for the cause of the infection. After visiting the area and talking to local residents, he identified the source of the outbreak to&nbsp;the local water pump that people used to drink water. &nbsp;To prove his point and persuade the local council to disable the well pump, he created the famous &#8220;Cholera Map&#8221;, which as a result immediately ended the outbreak.

In this project I am using John Snow&#8217;s data and to create an interactive version of the Cholera Map.

### John Snow&#8217;s Interactive Cholera Map&nbsp;Visualization

The visualization allows the exploration of John Snow&#8217;s data in an interactive way. The tool consists of an interactive map with support for zooming and panning, a time region selection widget (left of the map) and graphs displaying the number of deaths per day, and deaths by age and sex for the selected time period. There is also a clustering mode, that partitions&nbsp;the map into variable width boxes, enabling exploration of areas of interest. Finally, with the playback control (bottom right), the user can scroll through the selected dates or play the selection as an animation.

### Download

Application has been developed in <a href="http://www.processing.org" target="_blank" rel="noopener noreferrer">Processing</a>. For the binaries,&nbsp;[Java 7][2] is required.

<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-file-text-o qode_icon_element" style="color: #000000;" ></i></span> [Source Code][3]&nbsp;|&nbsp;<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-windows qode_icon_element" style="color: #000000;" ></i></span> [Win32][4]&nbsp;|&nbsp;<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-windows qode_icon_element" style="color: #000000;" ></i></span> [Win64][5]&nbsp;|&nbsp;<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-linux qode_icon_element" style="color: #000000;" ></i></span> [Linux32][6]&nbsp;| <span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-linux qode_icon_element" style="color: #000000;" ></i></span> [Linux64][7]&nbsp;|<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-apple qode_icon_element" style="color: #000000;" ></i></span> [Mac OSX][8]

### Gallery

\[vc\_empty\_space height=&#8221;10px&#8221;\]\[vc\_gallery type=&#8221;image\_grid&#8221; interval=&#8221;3&#8243; images=&#8221;16337,16338,16339,16340&#8243; onclick=&#8221;link\_image&#8221; custom\_links\_target=&#8221;\_self&#8221; column\_number=&#8221;6&#8243; grayscale=&#8221;yes&#8221; choose\_frame=&#8221;default&#8221; img_size=&#8221;366&#215;250&#8243;\]

[vc\_empty\_space height=&#8221;20px&#8221;]

### Acknowledgements

Application was developed for the Fall 2009 <a href="https://www.evl.uic.edu/aej/424/index.html#" target="_blank" rel="noopener noreferrer">Visualization and Visual Analytics</a> course (CS424), taught by my advisor Prof. <a href="https://www.evl.uic.edu/aej/" target="_blank" rel="noopener noreferrer">Andrew Johnson</a>, at the <a href="http://www.uic.edu" target="_blank" rel="noopener noreferrer">University of Illinois at Chicago</a>.

 [1]: http://en.wikipedia.org/wiki/Cholera#History
 [2]: http://java.com/en/download/
 [3]: https://github.com/mvictoras/InteractiveCholeraMap/archive/v1.0.tar.gz
 [4]: https://github.com/mvictoras/InteractiveCholeraMap/releases/download/v1.0/Interactive.Cholera.Map.Win32.zip
 [5]: https://github.com/mvictoras/InteractiveCholeraMap/releases/download/v1.0/Interactive.Cholera.Map.Win64.zip
 [6]: https://github.com/mvictoras/InteractiveCholeraMap/releases/download/v1.0/Interactive.Cholera.Map.Linux32.zip
 [7]: https://github.com/mvictoras/InteractiveCholeraMap/releases/download/v1.0/Interactive.Cholera.Map.Linux64.zip
 [8]: https://github.com/mvictoras/InteractiveCholeraMap/releases/download/v1.0/Interactive.Cholera.Map.Mac.OSX.zip