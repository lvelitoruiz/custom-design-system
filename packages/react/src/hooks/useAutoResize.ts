import { useCallback, useLayoutEffect, useRef } from 'react';

interface UseAutoResizeOptions {
  minRows?: number;
  maxRows?: number;
  enabled?: boolean;
}

export const useAutoResize = (
  value: string,
  { minRows = 2, maxRows, enabled = true }: UseAutoResizeOptions = {}
) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = useCallback(() => {
    if (!enabled || !textareaRef.current) return;

    const textarea = textareaRef.current;
    
    // Reset height to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate line height
    const styles = window.getComputedStyle(textarea);
    const lineHeight = parseInt(styles.lineHeight);
    const paddingTop = parseInt(styles.paddingTop);
    const paddingBottom = parseInt(styles.paddingBottom);
    const borderTop = parseInt(styles.borderTopWidth);
    const borderBottom = parseInt(styles.borderBottomWidth);
    
    // Calculate min and max heights
    const minHeight = lineHeight * minRows + paddingTop + paddingBottom + borderTop + borderBottom;
    const maxHeight = maxRows ? lineHeight * maxRows + paddingTop + paddingBottom + borderTop + borderBottom : Infinity;
    
    // Set new height
    let newHeight = Math.max(minHeight, textarea.scrollHeight);
    if (maxHeight !== Infinity) {
      newHeight = Math.min(newHeight, maxHeight);
    }
    
    textarea.style.height = `${newHeight}px`;
    
    // Handle scrollable state when content exceeds maxRows
    if (maxRows && textarea.scrollHeight > maxHeight) {
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  }, [enabled, minRows, maxRows]);

  useLayoutEffect(() => {
    resize();
  }, [value, resize]);

  return { textareaRef, resize };
};