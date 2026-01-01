var musicState = true;
function playmusic() {
    document.getElementById("music").play();
    $("#musicBox").css("animation", "show1 1s forwards");
};
function controlMusic() {
    if (musicState) {
        document.getElementById("music").pause();
        $("#musicBorder img").css("animation", "none");
        $("#musicBorder img").attr("title", "点击播放音乐");
        musicState = false;
    } else {
        document.getElementById("music").play();
        $("#musicBorder img").css("animation", "rotate 12s linear infinite");
        $("#musicBorder img").attr("title", "点击暂停音乐");
        musicState = true;
    }
}
$(document).ready(function () {
    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var Pagimg = 1;
    var Pag6Text = ["第0项", '"我想让自己变成让人喜欢的人"', '"我害怕没有可以倾诉的人"', '"因为"', '"怎么说，就是因为"', '"我性格比较敏感吧"', '呃。。。小新？'];
    var pagContent = ['第0页', '<div class="Pag" id="Pag1"><h1>2026</h1><img src="img/newYear.png" alt="新年快乐"><h2><span style="font-size: 64px;text-shadow: 2px 4px 2px #E9942E;">小xin</span>，请查收你的2025大学生活报告~</h2>button class="downPag">好</button></div>', '<div class="Pag" id="Pag2"><h1>你的关键词</h1><img src="img/low.png" alt="差评" id="chaping"><img src="img/good.png" alt="好评" id="haoping" style="display:none"><h2>关键词有误？<a href="#" id="Nomykey">【这不是我的关键词】</a></h2><button class="downPag">下一页</button></div>', '<div class="Pag" id="Pag3"><h1 title="and me">你的世界线</h1><ul></ul><button class="downPag">下一页</button></div>', '<div class="Pag" id="Pag4"><div id="Pag4Right"><dl><dt>MBTI</dt><dd>ENTJ(?</dd><dt>兴趣</dt><dd>音乐/看电影</dd><dt>经常做的事</dt><dd>刷抖音/睡觉</dd><dt>爱玩的游戏</dt><dd>无畏契约</dd><dt>喜欢的IP</dt><dd>哈利波特/蜡笔小新</dd><dt>目标</dt><dd>减肥脱单</dd><dt title="我主观认定的">缺点</dt><dd><i>不 爱 老 己</i></dd></dl></div><p title="来自小新">失败一次就放弃，永远成不了独当一面的大人噢！</p><p title="来自平平">一天到晚就知道睡觉，昨晚怎么不睡？</p><p title="来自平平">2026,<br>让我们来挑战一下早睡吧！</p><button class="downPag" onclick="playmusic()">下一页</button></div>', '<div class="Pag" id="Pag5"><h1>2026</h1><h2>在这里写下你的新年愿望吧！</h2><textarea id="newYearWish" placeholder="比如：找一个知心伙伴~"></textarea><br><button class="downPag">提交</button></div>', '<div class="Pag" id="Pag6"></div>', '<div class="Pag" id="Pag7"><h1>新年快乐</h1><h2>There is END</h2><button><a href="afterTalk.html">后日谈</a></button></div>'];
    var timelist = ['<li title="不让你ta看我的朋友圈，这是意外(强调"><span>8.18 </span> 加好友</li>', '<li><span>9.4 </span> 顺利开学</li>', '<li><span>9.8 </span> 军训【内有暴雨】</li>', '<li title="挺好吃的就是贵了点"><span>10.13 </span> 团日散步/野人先生</li>', '<li title="我不唱，我不唱"><span>10.20 </span> 反诈KTV</li>', '<li><span>10.24 </span> "大鱼上钩"</li>', '<li title="你给摸鱼的！"><span>11.2 </span> 深圳创新TV社会实践小组成立</li>', '<li title="害我不得不也刷抖音了/(ㄒoㄒ)/~~"><span>11.9 </span> 领养抖音火花</li>', '<li title="Happy Birthday~"><span>11.10 </span> 吃巧克力蛋糕（￣▽￣）~</li>', '<li><span>11.12 </span> 柳G206火锅</li>', '<li><span>11.14 </span> 小xin in 佛山【校运会</li>', '<li><span>11.17 </span> 一起慢跑【累】</li>', '<li><span>11.21 </span> 鸡柳大人【好吃】</li>', '<li><span>11.26 </span> 细菌感染【注意健康饮食】</li>', '<li><span>11.29 </span> 星级宿舍get！</li>', '<li><span style="font-size: 30px;">12月初 </span> “戒抖音”【失败】</li>', '<li title="下次记得提前出门！"><span>12.4 </span> 疯狂动物城2</li>', '<li><span>12.5 </span> 代体测/冰淇淋【下次还找你</li>', '<li><span>12.8 </span> 小xin外卖被偷【值得纪念x</li>', '<li><span>12.9 </span> 胡闹厨房【纯胡闹</li>', '<li><span>12.15 </span> 不可抗力事件【</li>', '<li><span>12.24 </span> 大潮起珠江</li>', '<li><span>12.25 </span> 圣诞快乐</li>', '<li title="那天晚上我都听着呢"><span>12.31 </span> "倾诉与传递"</li>', '<li><span>2026 </span> 新年快乐</li>'];
    $(document).on("click", ".downPag", function () {
        if (Pagimg == 5) {
            var wish = $("#newYearWish").val();
            if (wish == "") {
                alert("请输入一个愿望/目标~");
                return;
            }
        }
        $(this).attr("disabled", "disabled");
        $("#root-background img").animate({
            top: "+=240px",
            opacity: 0
        }, 1200, function () {
            $(this).remove();
        })
        $("#Pag" + Pagimg).animate({
            top: "+=240px",
            opacity: 0
        }, 1200, function () {
            $(this).remove();
        })
        Pagimg++;
        $("#root-background").prepend("<img src='img/background" + Pagimg + ".png'>");
        $("#content").prepend(pagContent[Pagimg]);
        if (Pagimg == 2) {
            var lownum = 0;
            var creatLow = setInterval(function () {
                lownum++;
                var div = document.createElement('img');
                div.src = "img/low.png";
                div.classList.add("NoLow");
                div.style.top = getRandomNum(0, 75) + "vh";
                div.style.left = getRandomNum(0, 85) + "vw";
                div.style.width = getRandomNum(80, 240) + "px";
                $("#creatLow").append(div);
                if (lownum > 24) {
                    clearInterval(creatLow);
                    $("#Pag2 h2").addClass("showclass");
                }
            }, 120);
        } else if (Pagimg == 3) {
            var listnum = 0;
            var creatlist = setInterval(function () {
                $("#Pag3 ul").prepend(timelist[listnum]);
                listnum++;
                if (listnum > 25) {
                    clearInterval(creatlist);
                    $("#Pag3 button").addClass("showclass");
                }
            }, 1300);
            //偷偷加载视频
            $("#root-background").append('<video src="img/fireWork.mp4" muted autoplay style="opacity: 0"></video>');
        } else if (Pagimg == 6) {
            $("#root-background video").remove();
            document.getElementById("music").pause();
            $("#musicBox").css("right", "-100px");
            var textnum = 0;
            var Pag6textShow = setInterval(function () {
                textnum++;
                if (textnum == 1) {
                    $("#Pag6").append("<h2></h2>")
                }
                $("#Pag6 h2").text(Pag6Text[textnum])
                if (textnum == 6) {
                    setTimeout(function () {
                        $("#Pag6 h2").remove();
                        $("body").css("background-color", "#5288e5d7");
                        $("#root-background").animate({ opacity: 0 }, 2000, xiaoXinWord());
                    }, 2000);
                    clearInterval(Pag6textShow);
                }
            }, 2000);
            function xiaoXinWord() {
                $("audio").attr("src", "img/xiaoXin.mp3");
                document.getElementById("music").play();
                $("#Pag6").append("<p>要永远把自己放在第一位好好爱自己哦</p>");
                setTimeout(function () { $("#Pag6").append("<p>过去的事情后悔也没有用，把希望放在明天好好活下去吧</p>"); }, 3000);
                setTimeout(function () { $("#Pag6").append("<p>谁都可以不喜欢你，但是你自己不可以哦</p>"); }, 9000);
                setTimeout(function () {
                    document.getElementById("music").pause();
                    $("#Pag6>p").animate({ opacity: 0 }, 2400, function () { $("#Pag6>p").remove() });
                    $("#root-background").animate({ opacity: 1 }, 2400, function () {
                        $("#Pag6").append("<h3>平平：我做的好烂！</h3>")
                        $("audio").attr("src", "img/Jingle_bell.mp3");
                        document.getElementById("music").currentTime = 90.6;
                        document.getElementById("music").play();
                        setTimeout(function () {
                            $("#Pag6 h3").css("animation", "rotateYto-90 1s forwards")
                            $("#Pag6 h3").animate({ color: "#F8A636" }, 1000, function () {
                                $("#root-background").append('<video src="img/fireWork.mp4" muted id="fireWorkVideo"></video>');
                                document.getElementById("fireWorkVideo").play();
                                setTimeout(function () {
                                    $("#fireWorkVideo").remove();
                                    $("#root-background img").animate({
                                        top: "+=240px",
                                        opacity: 0
                                    }, 1200, function () {
                                        $(this).remove();
                                    })
                                    $("#Pag" + Pagimg).animate({
                                        top: "+=240px",
                                        opacity: 0
                                    }, 1200, function () {
                                        $(this).remove();
                                    })
                                    Pagimg++;
                                    $("#root-background").prepend("<img src='img/background" + Pagimg + ".png'>");
                                    $("#content").prepend(pagContent[Pagimg]);
                                    $("#musicBox").css("right", "0");
                                }, 11000);
                                setTimeout(showOurWish(), 2000);
                            });
                        }, 2000);
                    });
                }, 13000);
            };
            function showOurWish() {
                $("#Pag6 h3").text(wish);
                $("#Pag6 h3").css("animation", "rotateYto0 2s forwards");

            }
        }
    });
    $(document).on("click", "#Nomykey", function () {
        $("#Pag2 h2").text("");
        $(".NoLow").animate({
            top: "159px",
            left: "44vw",
            width: "200px"
        }, 1200, function () {
            $(".NoLow").animate({
                opacity: 0
            }, 700, function () {
                $(".NoLow").remove();
            })
        });
        setTimeout(function () {
            $(document).find("#chaping").hide();
            $(document).find("#haoping").show();
            setTimeout(function () {
                $("#Pag2 h2").append("<span class='youArePrefect'>你</span>");
            }, 1000);
            setTimeout(function () {
                $("#Pag2 h2").append("<span class='youArePrefect'>是</span>");
            }, 1500);
            setTimeout(function () {
                $("#Pag2 h2").append("<span class='youArePrefect'>最</span>");
            }, 1800);
            setTimeout(function () {
                $("#Pag2 h2").append("<span class='youArePrefect'>棒</span>");
            }, 2100);
            setTimeout(function () {
                $("#Pag2 h2").append("<span class='youArePrefect'>的</span>");
            }, 2400);
            setTimeout(function () {
                $("#Pag2 h2").append("<span class='youArePrefect'>！</span>");
            }, 2500);
            setTimeout(function () {
                $("#Pag2 button").addClass("showclass");
            }, 3500);
        }, 1600);
    });

});





