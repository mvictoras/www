---
title: John Snow’s Interactive Cholera Map
date: 2009-09-01T19:41:06+00:00
aliases: [ /2009/09/01/john-snows-interactive-cholera-map/ ]
featured_image: CholeraScreenCover.jpg
draft: false
---

{{< figure src="JohnSnowCholeraMap.jpg" >}}

In 1854 in the Soho district of London there was a severe cholera outbreak, famously known as <a class="external text" href="http://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak" rel="nofollow">The 1854 Broad Street cholera outbreak</a>, taking&nbsp;the lives of 616 people. While the [bacterium was isolated][1]&nbsp;the same year by Italian anatomist Filippo Pacini, it was still unknown how the disease spread, &nbsp;crediting the transmission to&nbsp;bad air, known as &#8220;miasma&#8221;. John Snow, an English physician and advocate of medical hygiene, being very&nbsp;skeptic, began&nbsp;investigating for the cause of the infection. After visiting the area and talking to local residents, he identified the source of the outbreak to&nbsp;the local water pump that people used to drink water. &nbsp;To prove his point and persuade the local council to disable the well pump, he created the famous &#8220;Cholera Map&#8221;, which as a result immediately ended the outbreak.

In this project I am using John Snow&#8217;s data and to create an interactive version of the Cholera Map.

### John Snow&#8217;s Interactive Cholera Map&nbsp;Visualization

The visualization allows the exploration of John Snow&#8217;s data in an interactive way. The tool consists of an interactive map with support for zooming and panning, a time region selection widget (left of the map) and graphs displaying the number of deaths per day, and deaths by age and sex for the selected time period. There is also a clustering mode, that partitions&nbsp;the map into variable width boxes, enabling exploration of areas of interest. Finally, with the playback control (bottom right), the user can scroll through the selected dates or play the selection as an animation.

<canvas data-processing-sources="app/InteractiveCholeraMap.pde app/DataParser.pde app/Globals.pde app/BarChart.pde app/Chart.pde app/Grid.pde app/CholeraMap.pde app/HorizontalBarChart.pde app/Dates.pde app/LineChart.pde app/Deaths.pde app/TimeLineChart.pde app/DrawingArea.pde app/VerticalBarChart.pde"></canvas>

### Download

Application has been developed in <a href="http://www.processing.org" target="_blank" rel="noopener noreferrer">Processing</a>. For the binaries,&nbsp;[Java 7][2] is required.

<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-file-text-o qode_icon_element" style="color: #000000;" ></i></span> [Source Code][3]&nbsp;|&nbsp;<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-windows qode_icon_element" style="color: #000000;" ></i></span> [Win32][4]&nbsp;|&nbsp;<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-windows qode_icon_element" style="color: #000000;" ></i></span> [Win64][5]&nbsp;|&nbsp;<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-linux qode_icon_element" style="color: #000000;" ></i></span> [Linux32][6]&nbsp;| <span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-linux qode_icon_element" style="color: #000000;" ></i></span> [Linux64][7]&nbsp;|<span data-type="normal"  class="qode_icon_shortcode  q_font_awsome_icon   " style=" "><i class="qode_icon_font_awesome fa fa-apple qode_icon_element" style="color: #000000;" ></i></span> [Mac OSX][8]

### Gallery

{{< gallery "CholeraScreen1.png" "CholeraScreen2.png" "CholeraScreen3.png" "CholeraScreen4.png" "CholeraScreen5.png" >}}

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
