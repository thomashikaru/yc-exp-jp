// constants
// change the following prior to real experiment: trials_per_block, debug_mode, completion_code
const use_flask = false;
const trials_per_block = 85; // 85;
const stimulus_duration = 10000; // 7000
const post_stimulus_delay = 750; // 1500
const fixation_duration = 500;
const completion_code = "CJRXMQDW";
const completion_code_jp = "CJRXMQDW";
const math_duration = 10000;
const build_sent_duration = 30000;
const build_sent_duration_jp = 45000;
const submit_url =
  "https://noisy-comp-server-311aa565092d.herokuapp.com/api/submit_experiment/5";

const n_back_base = 20;
const vigilance_repeat_back_range = [5, 15];
const vigilance_frequency = 0.25;
const repeat_list_shuffle_block_size = 2;
const breaks_per_exp = 12;
const break_max_len = 180;
const num_lists = 12;
const debug_mode = false;
const prolific = false;

const sent_prompt_jp =
  '<span style="font-size: 25px">この文が以前に出てきた場合は、スペースバーを押してください。<br>それ以外の場合は、スペースバーを押さず文を暗記してみてください。</span>';

// instructions
const task_instructions_jp = [
  "<p>手順</p> <p>この実験には約 45分かかります。" +
    "画面上部の進行状況バーに、実験の進行状況が表示されます。" +
    "実験中はページをリロードしないでください。</p>",

  "<p>手順</p> <p>この実験回答中に集中することが重要です。" +
    "実験中に、回答の妥当性に関するフィードバックを受け取ります。 " +
    "回答に要する作業は難しい場合があり、完璧な成果は期待できません。" +
    "<b>ただし、回答結果が明らかに注意力の欠如を反映している場合、報酬は支払われません。</b></p>",

  //   "<p>手順</p> <p>実験が完了すると、完了コードが表示されます。" +
  //     "完了コードを取得する前に、誤って実験を終了しないように注意してください。</p>",

  "<p>手順</p> <p>各トライアルの最初の画面には、4つの部分に分割された文章がランダムな順序で表示されます。" +
    "この文を暗記してみてください。 実験中にすでにその文を見たことがある場合は、スペースを押してください。" +
    "次の画面では、基本的な数学の問題を解くように求められます。" +
    "トライアルの最後の画面では、はじめに見た文章を記憶に基づいて書くように求められます。" +
    "画面に表示されている部分も含めて全文を書き直してください。</p>",

  "<p>手順</p> <p>トライアルの各画面には時間制限があります。 " +
    "ランダム順序の文を暗記するのに 10秒、数学の問題を解くのに 10秒、暗記した文を書き出すのに 45秒です。",

  "<p>手順</p> <p>実践トライアルが表示されます。</p>",
];

const task_instructions = [
  "<p>TASK INSTRUCTIONS.</p> <p>This experiment should take around 35 minutes. " +
    "The progress bar at the top of the screen will indicate your progress in the experiment. " +
    "Do NOT reload the page during the experiment, as this will cause you to lose your progress.</p>",

  "<p>TASK INSTRUCTIONS.</p> <p>It is important that you pay attention during this study. " +
    "During the study, you will be receiving feedback on the correctness of your responses. " +
    "The tasks may be challenging and we don't expect perfect performance. " +
    "<b>However, if your results reflect an obvious lack of attention, you will not get paid.</b></p>",

  "<p>TASK INSTRUCTIONS.</p> <p>Once you complete the experiment, you will be shown your completion code. " +
    "Be careful not to accidentally exit the experiment before getting your completion code.</p>",

  "<p>TASK INSTRUCTIONS.</p> <p>The first screen in each trial will show a sentence broken into 4 parts, in scrambled order. " +
    "Try to memorize this sentence. Press SPACE if you have seen the sentence before at <b>ANY</b> point during the study. " +
    "On the next screen, you will be asked to solve a basic math problem. " +
    "On the final screen of the trial, you will be prompted to write the sentence that you saw previously from memory. " +
    "Please re-write the entire sentence, including the part shown on the screen.</p>",

  "<p>TASK INSTRUCTIONS.</p> <p>Each screen in the trial has a time limit. " +
    "10 seconds to memorize the scrambled sentence, 10 seconds for the math question, and 30 seconds to write out the sentence from memory. " +
    "You do not have to use the full time for each question. <b>Again, we don't expect perfect performance, but please do your best.</b> </p>",

  "<p>TASK INSTRUCTIONS.</p> <p>You will now see a practice trial. </p>",
];

function makeRect(w, h, x, y, text) {
  var l =
    `<svg width="${w + 2 * x}" height="${h + 2 * y}">` +
    `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" style="fill:white;stroke:black;stroke-width:5;fill-opacity:0.0;stroke-opacity:1.0"/>` +
    `<text x="${2 * x}" y="${
      h / 3
    }" font-family="Verdana" font-size="28" fill="black" style="white-space: pre-line">`;
  var t = "";
  var chunks = text.split("\n");
  for (var i = 0; i < chunks.length; i++) {
    t += `<tspan x="${2 * x}" dy="1.2em">${chunks[i]}</tspan>`;
  }
  var r = `</text></g></svg>`;
  return l + t + r;
}

function makeGrid(tl, tr, bl, br) {
  return (
    "<div>" +
    makeRect(400, 200, 10, 10, tl) +
    makeRect(400, 200, 10, 10, tr) +
    "</div><div>" +
    makeRect(400, 200, 10, 10, bl) +
    makeRect(400, 200, 10, 10, br) +
    "</div>"
  );
}

function makeCueEn(verb) {
  return (
    '<span style="font-size:40px;">__________ ' +
    verb +
    " ____________________</span>"
  );
}

function makeCueJp(verb) {
  return (
    '<span style="font-size:40px;">______________________________ ' +
    verb +
    "</span>"
  );
}

function makeMathQ(question) {
  return `<span style="font-size: 40px">${question}</span>`;
}

// formatting function
function format(s) {
  return '<span style="font-size:40px;">' + s + "</span>";
}

function format_red(s) {
  return '<span style="font-size:40px;color:red">' + s + "</span>";
}

function format_green(s) {
  return '<span style="font-size:40px;color:green">' + s + "</span>";
}

function format_orange(s) {
  return '<span style="font-size:40px;color:orange">' + s + "</span>";
}

function standardize_whitespace(s) {
  return s.replaceAll(/\s+/g, " ");
}

function remove_period_jp(s) {
  return s.replaceAll(/。/g, "");
}

function tr(text, search, replace) {
  // Make the search string a regex.
  var regex = RegExp("[" + search + "]", "g");
  var t = text.replace(regex, function (chr) {
    // Get the position of the found character in the search string.
    var ind = search.indexOf(chr);
    // Get the corresponding character from the replace string.
    var r = replace.charAt(ind);
    return r;
  });
  return t;
}

function convert_jp_num(input) {
  return tr(input, "０１２３４５６７８９　", "0123456789 ");
}

function render_newline(s) {
  return s;
  return s.split("\n").join("<br/>");
}

function display_score_feedback(score) {
  if (score == 100) {
    return format_green("Perfect");
  } else if (score >= 95) {
    return format_green("Very Good");
  } else if (score >= 90) {
    return format_orange("Good");
  } else {
    return format_red("Poor");
  }
}

function display_score_feedback_jp(score) {
  if (score == 100) {
    return format_green("完全です！");
  } else if (score >= 90) {
    return format_green("とても良くできました！");
  } else if (score >= 80) {
    return format_orange("良くできました！");
  } else {
    return format_red("ちょっと間違いが多いです！");
  }
}

function editDistance(str1 = "", str2 = "") {
  const track = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return track[str2.length][str1.length];
}

function get_stats(a) {
  var d = {};
  for (var i = 0; i < a.length; i++) {
    if (!(a[i].transitivity in d)) {
      d[a[i].transitivity] = {};
    }
    if (!(a[i].modifier_position in d[a[i].transitivity])) {
      d[a[i].transitivity][a[i].modifier_position] = {};
    }
    if (!(a[i].condition in d[a[i].transitivity][a[i].modifier_position])) {
      d[a[i].transitivity][a[i].modifier_position][a[i].condition] = 0;
    }
    d[a[i].transitivity][a[i].modifier_position][a[i].condition]++;
  }
  return d;
}

function csvToJson(csvString) {
  return new Promise((resolve, reject) => {
    Papa.parse(csvString, {
      complete: function (results) {
        resolve(results.data);
      },
      header: true, // Indicates the first row of CSV is the header
      skipEmptyLines: true, // Skip empty lines in the input
      error: function (error) {
        reject(error);
      },
    });
  });
}
