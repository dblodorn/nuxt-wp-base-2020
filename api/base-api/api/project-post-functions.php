<?php
  function project_data($post, $p) {
    return array(
      'id' => $post->ID,
      'slug' => $post->post_name,
      'title' => $post->post_title,
    );
  }