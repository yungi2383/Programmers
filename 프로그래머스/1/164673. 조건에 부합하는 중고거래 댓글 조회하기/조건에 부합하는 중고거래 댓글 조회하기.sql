-- 코드를 입력하세요
SELECT b.title, b.board_id, r.reply_id, r.writer_id, r.contents, substring(r.created_date,1,10) as CREATED_DATE  from used_goods_reply r
left join used_goods_board b on r.board_id = b.board_id
where b.created_date like '2022-10%'
order by r.created_date, b.title